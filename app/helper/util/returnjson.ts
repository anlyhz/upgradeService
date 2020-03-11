export default class ResultJSON {
  
  fail(errorCode, errorMsg, id) {
    return {
      "error": {
        code: errorCode,
        message: errorMsg
      },
      id
    }
  }
  
  success(data, id) {
    return {
      "result": data || null,
      id
    }
  }
}