import { onMounted, reactive, toRefs } from "vue";
import { http } from "@/utils/http";
import { useMessage } from "./useMessage";
import { BasicGetResult } from "#/resultType";
import ListFactory, { UrlListType } from "@/utils/list/listFactory";

/**
 * 接受一个url对象，提供基础的增删改查方法
 * @param url url对象
 * @returns 方法合集
 */
function useSimpleList<T, U = any>(url: Partial<UrlListType>) {
  const factory = new ListFactory<T, U>(url);

  const { dataSource, ipagination, loading, queryParam, modalFormRef, drawerFormRef } = toRefs(
    reactive(factory)
  );

  const getQueryParams = () => {
    return {
      page: ipagination.value.current,
      pageSize: ipagination.value.pageSize,
      ...queryParam.value
    } as unknown as U;
  };

  const loadData = async <T>(firstPage = false) => {
    if (!url.list) {
      useMessage("error", '请设置url属性');
      return;
    }
    if (firstPage) {
      ipagination.value.current = 1;
    }
    const params = getQueryParams();
    try {
      loading.value = true;
      const res = await http.get<U, BasicGetResult<T[]>>(url.list, params);
      dataSource.value = res.data as any;
      ipagination.value.total = res.total!;
    } finally {
      loading.value = false;
    }
  };

  const handleAdd = () => {
    modalFormRef.value.edit({});
    modalFormRef.value.title = '新增';
  };

  const handleSearch = (values: any) => {
    queryParam.value = values;
    loadData(true);
  };

  const handleReset = () => {
    queryParam.value = {} as any;
    loadData(true);
  };

  const handleEdit = <T>(record: T, title = '编辑') => {
    modalFormRef.value.edit(record);
    modalFormRef.value.title = title;
  };

  const handleDelete = async (id: number) => {
    if (!url.delete) {
      useMessage("error", '请设置url属性');
      return;
    }
    const res = await http.post<{}, BasicGetResult<{ count: number }>>(url.delete, {
      params: { id }
    });
    if (res.code === 200 && res.data.count > 0) {
      useMessage("success", '删除成功');
      loadData(true);
    }
  };

  const handleAddDrawer = () => {
    drawerFormRef.value.add();
    drawerFormRef.value.title = '新增';
  };

  const handleEditDrawer = <T>(record: T, title = '编辑') => {
    drawerFormRef.value.edit(record);
    drawerFormRef.value.title = title;
  };

  const handleSizeChange = (val: number) => {
    ipagination.value.pageSize = val;
    loadData();
  };

  const handleCurrentChange = (val: number) => {
    ipagination.value.current = val;
    loadData();
  };

  onMounted(async () => {
    await loadData(true);
  });

  return {
    loadData,
    handleAdd,
    handleEdit,
    handleReset,
    handleDelete,
    handleSearch,
    handleAddDrawer,
    handleEditDrawer,
    handleSizeChange,
    handleCurrentChange,
    dataSource,
    ipagination,
    modalFormRef,
    loading
  };
}

type SimpleListType = ReturnType<typeof useSimpleList>;

export { useSimpleList, type SimpleListType };
