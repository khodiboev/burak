export enum HttpCode {
    OK = 200,
    CREATED = 201,
    NOT_MODIFIED = 304,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
}

export enum Message {
    SOMETHING_WENT_WRONG = "Something went wrong",
    NO_DATA_FOUND = "no data is found",
    CREATE_FAILED = "create is failed",
    UPDATE_FAILED = "update is failed",

    USED_NICK_PHONE = "member nick or phone is already in use!",
    NO_MEMBER_NICK = "member nick is required!",
    NO_MEMBER_PASSWORD = "member password is required!",
    NOT_FOUND = "member not found!",
    NOT_AUTHONTICATED = "you are not authenticated, login first!"
}

class Errors extends Error {
    public code: HttpCode;
    public message: Message;

    static standard = {
        code: HttpCode.INTERNAL_SERVER_ERROR,
        message: Message.SOMETHING_WENT_WRONG
    }

    constructor(statusCode: HttpCode, statusMessage: Message) {
        super();
        this.code = statusCode;
        this.message = statusMessage;
    }
}

export default Errors;