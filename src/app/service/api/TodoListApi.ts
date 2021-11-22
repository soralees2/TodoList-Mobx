import axios from 'axios';

// 실제로 통신하는부분만 들어있음
class TodoListApi {
    selectItemList = async () => {
      const data = await axios.get(
        'http://localhost:80/item',
      ).catch((error:any) => error.response.data);
      return data;
    }

    insertItem = async (payload:object) => {
      const data = await axios.post(
        'http://localhost:80/item',
        payload,
        { // json-server는 content-type설정 해줘야함
          headers: {
            'Content-Type': 'application/json',
          },
        },
      ).catch((error:any) => error.response.data);
      return data;
    }

    deleteItem = async (payload:object) => {
      const data = await axios.post(
        'http://localhost:80/item',
        payload,
        { // json-server는 content-type설정 해줘야함
          headers: {
            'Content-Type': 'application/json',
          },
        },
      ).catch((error:any) => error.response.data);
      return data;
    }

    deleteItemAxios = async (index:number) => {
      const data = await axios.delete(
        `http://localhost:80/item/${index}`,
        // "http://localhost:80/item/" + index 같은의미
      );
      return data;
    }

    // 수정 소라가 만들고있음
    modifyItem = async (payload:object) => {
      const data = await axios.put(
        'http://localhost:80/item',
        payload,
        { // json-server는 content-type설정 해줘야함
          headers: {
            'Content-Type': 'application/json',
          },
        },
      ).catch((error:any) => error.response.data);
      return data;
    }
}

export default new TodoListApi();
// 인터럽터는 사용하지 않고 순수 axios만 사용한 예제
