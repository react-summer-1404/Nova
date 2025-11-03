export const useHandleChange = (key, value) => {
    setisSearch(
      (isSearch) => {
        if (value) {
          isSearch.set(key, value);
        } else {
          isSearch.delete(key);
        }
        return isSearch;
      },
      { replace: true }
    );
    return {key,value,isSearch,setisSearch}
  };