export interface Any {
    "@type"?: string;
}
export interface Status {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: {
        "@type"?: string;
    }[];
}
export interface AddressResponse {
    address?: string;
    type?: "ADDRESS_TYPE_UNSPECIFIED" | "ADDRESS_TYPE_ETHEREUM" | "ADDRESS_TYPE_OSMOSIS";
}
export declare enum AddressType {
    ADDRESS_TYPE_UNSPECIFIED = "ADDRESS_TYPE_UNSPECIFIED",
    ADDRESS_TYPE_ETHEREUM = "ADDRESS_TYPE_ETHEREUM",
    ADDRESS_TYPE_OSMOSIS = "ADDRESS_TYPE_OSMOSIS"
}
export interface Key {
    /** @format uint64 */
    id?: string;
    /** @format uint64 */
    space_id?: string;
    /** @format uint64 */
    keychain_id?: string;
    type?: "KEY_TYPE_UNSPECIFIED" | "KEY_TYPE_ECDSA_SECP256K1" | "KEY_TYPE_EDDSA_ED25519";
    /** @format byte */
    public_key?: string;
    /** @format uint64 */
    intent_id?: string;
}
export interface KeyRequest {
    /** @format uint64 */
    id?: string;
    creator?: string;
    /** @format uint64 */
    space_id?: string;
    /** @format uint64 */
    keychain_id?: string;
    key_type?: "KEY_TYPE_UNSPECIFIED" | "KEY_TYPE_ECDSA_SECP256K1" | "KEY_TYPE_EDDSA_ED25519";
    status?: "KEY_REQUEST_STATUS_UNSPECIFIED" | "KEY_REQUEST_STATUS_PENDING" | "KEY_REQUEST_STATUS_FULFILLED" | "KEY_REQUEST_STATUS_REJECTED";
    reject_reason?: string;
    /** @format uint64 */
    intent_id?: string;
}
export declare enum KeyRequestStatus {
    KEY_REQUEST_STATUS_UNSPECIFIED = "KEY_REQUEST_STATUS_UNSPECIFIED",
    KEY_REQUEST_STATUS_PENDING = "KEY_REQUEST_STATUS_PENDING",
    KEY_REQUEST_STATUS_FULFILLED = "KEY_REQUEST_STATUS_FULFILLED",
    KEY_REQUEST_STATUS_REJECTED = "KEY_REQUEST_STATUS_REJECTED"
}
export declare enum KeyType {
    KEY_TYPE_UNSPECIFIED = "KEY_TYPE_UNSPECIFIED",
    KEYTYPEECDSASECP256K1 = "KEY_TYPE_ECDSA_SECP256K1",
    KEYTYPEEDDSAED25519 = "KEY_TYPE_EDDSA_ED25519"
}
export interface Keychain {
    /** @format uint64 */
    id?: string;
    creator?: string;
    description?: string;
    admins?: string[];
    parties?: string[];
    /** @format uint64 */
    admin_intent_id?: string;
    fees?: {
        key_req?: string;
        sig_req?: string;
    };
    is_active?: boolean;
}
export interface KeychainFees {
    /** @format int64 */
    key_req?: string;
    /** @format int64 */
    sig_req?: string;
}
export interface PageRequest {
    /** @format byte */
    key?: string;
    /** @format uint64 */
    offset?: string;
    /** @format uint64 */
    limit?: string;
    count_total?: boolean;
    reverse?: boolean;
}
export interface PageResponse {
    /** @format byte */
    next_key?: string;
    /** @format uint64 */
    total?: string;
}
export interface QueryKeyRequestByIdResponse {
    key_request?: {
        id?: string;
        creator?: string;
        space_id?: string;
        keychain_id?: string;
        key_type?: "KEY_TYPE_UNSPECIFIED" | "KEY_TYPE_ECDSA_SECP256K1" | "KEY_TYPE_EDDSA_ED25519";
        status?: "KEY_REQUEST_STATUS_UNSPECIFIED" | "KEY_REQUEST_STATUS_PENDING" | "KEY_REQUEST_STATUS_FULFILLED" | "KEY_REQUEST_STATUS_REJECTED";
        reject_reason?: string;
        intent_id?: string;
    };
}
export interface QueryKeyRequestsResponse {
    pagination?: {
        next_key?: string;
        total?: string;
    };
    key_requests?: {
        id?: string;
        creator?: string;
        space_id?: string;
        keychain_id?: string;
        key_type?: "KEY_TYPE_UNSPECIFIED" | "KEY_TYPE_ECDSA_SECP256K1" | "KEY_TYPE_EDDSA_ED25519";
        status?: "KEY_REQUEST_STATUS_UNSPECIFIED" | "KEY_REQUEST_STATUS_PENDING" | "KEY_REQUEST_STATUS_FULFILLED" | "KEY_REQUEST_STATUS_REJECTED";
        reject_reason?: string;
        intent_id?: string;
    }[];
}
export interface QueryKeyResponse {
    key?: {
        id?: string;
        space_id?: string;
        keychain_id?: string;
        type?: "KEY_TYPE_UNSPECIFIED" | "KEY_TYPE_ECDSA_SECP256K1" | "KEY_TYPE_EDDSA_ED25519";
        public_key?: string;
        intent_id?: string;
    };
    addresses?: {
        address?: string;
        type?: "ADDRESS_TYPE_UNSPECIFIED" | "ADDRESS_TYPE_ETHEREUM" | "ADDRESS_TYPE_OSMOSIS";
    }[];
}
export interface QueryKeychainByIdResponse {
    keychain?: {
        id?: string;
        creator?: string;
        description?: string;
        admins?: string[];
        parties?: string[];
        admin_intent_id?: string;
        fees?: {
            key_req?: string;
            sig_req?: string;
        };
        is_active?: boolean;
    };
}
export interface QueryKeychainsResponse {
    pagination?: {
        next_key?: string;
        total?: string;
    };
    keychains?: {
        id?: string;
        creator?: string;
        description?: string;
        admins?: string[];
        parties?: string[];
        admin_intent_id?: string;
        fees?: {
            key_req?: string;
            sig_req?: string;
        };
        is_active?: boolean;
    }[];
}
export interface QueryKeysResponse {
    pagination?: {
        next_key?: string;
        total?: string;
    };
    keys?: {
        key?: {
            id?: string;
            space_id?: string;
            keychain_id?: string;
            type?: "KEY_TYPE_UNSPECIFIED" | "KEY_TYPE_ECDSA_SECP256K1" | "KEY_TYPE_EDDSA_ED25519";
            public_key?: string;
            intent_id?: string;
        };
        addresses?: {
            address?: string;
            type?: "ADDRESS_TYPE_UNSPECIFIED" | "ADDRESS_TYPE_ETHEREUM" | "ADDRESS_TYPE_OSMOSIS";
        }[];
    }[];
}
export interface QueryParamsResponse {
    params?: object;
}
export interface QuerySignatureRequestByIdResponse {
    sign_request?: {
        id?: string;
        creator?: string;
        key_id?: string;
        data_for_signing?: string;
        status?: "SIGN_REQUEST_STATUS_UNSPECIFIED" | "SIGN_REQUEST_STATUS_PENDING" | "SIGN_REQUEST_STATUS_FULFILLED" | "SIGN_REQUEST_STATUS_REJECTED";
        signed_data?: string;
        reject_reason?: string;
    };
}
export interface QuerySignatureRequestsResponse {
    pagination?: {
        next_key?: string;
        total?: string;
    };
    sign_requests?: {
        id?: string;
        creator?: string;
        key_id?: string;
        data_for_signing?: string;
        status?: "SIGN_REQUEST_STATUS_UNSPECIFIED" | "SIGN_REQUEST_STATUS_PENDING" | "SIGN_REQUEST_STATUS_FULFILLED" | "SIGN_REQUEST_STATUS_REJECTED";
        signed_data?: string;
        reject_reason?: string;
    }[];
}
export interface QuerySpaceByIdResponse {
    space?: {
        id?: string;
        creator?: string;
        owners?: string[];
        admin_intent_id?: string;
        sign_intent_id?: string;
    };
}
export interface QuerySpacesResponse {
    pagination?: {
        next_key?: string;
        total?: string;
    };
    spaces?: {
        id?: string;
        creator?: string;
        owners?: string[];
        admin_intent_id?: string;
        sign_intent_id?: string;
    }[];
}
export interface SignRequest {
    /** @format uint64 */
    id?: string;
    creator?: string;
    /** @format uint64 */
    key_id?: string;
    /** @format byte */
    data_for_signing?: string;
    status?: "SIGN_REQUEST_STATUS_UNSPECIFIED" | "SIGN_REQUEST_STATUS_PENDING" | "SIGN_REQUEST_STATUS_FULFILLED" | "SIGN_REQUEST_STATUS_REJECTED";
    /** @format byte */
    signed_data?: string;
    reject_reason?: string;
}
export declare enum SignRequestStatus {
    SIGN_REQUEST_STATUS_UNSPECIFIED = "SIGN_REQUEST_STATUS_UNSPECIFIED",
    SIGN_REQUEST_STATUS_PENDING = "SIGN_REQUEST_STATUS_PENDING",
    SIGN_REQUEST_STATUS_FULFILLED = "SIGN_REQUEST_STATUS_FULFILLED",
    SIGN_REQUEST_STATUS_REJECTED = "SIGN_REQUEST_STATUS_REJECTED"
}
export interface Space {
    /** @format uint64 */
    id?: string;
    creator?: string;
    owners?: string[];
    /** @format uint64 */
    admin_intent_id?: string;
    /** @format uint64 */
    sign_intent_id?: string;
}
export type V1Beta2Params = object;
export interface Action {
    /** @format uint64 */
    id?: string;
    approvers?: {
        address?: string;
        approved_at?: string;
    }[];
    status?: "ACTION_STATUS_UNSPECIFIED" | "ACTION_STATUS_PENDING" | "ACTION_STATUS_COMPLETED" | "ACTION_STATUS_REVOKED" | "ACTION_STATUS_TIMEOUT";
    msg?: {
        "@type"?: string;
    };
    result?: {
        "@type"?: string;
    };
    creator?: string;
    /** @format uint64 */
    btl?: string;
    /** @format date-time */
    created_at?: string;
    /** @format date-time */
    updated_at?: string;
    intent?: Intent;
    mentions?: string[];
}
export declare enum ActionStatus {
    ACTION_STATUS_UNSPECIFIED = "ACTION_STATUS_UNSPECIFIED",
    ACTION_STATUS_PENDING = "ACTION_STATUS_PENDING",
    ACTION_STATUS_COMPLETED = "ACTION_STATUS_COMPLETED",
    ACTION_STATUS_REVOKED = "ACTION_STATUS_REVOKED",
    ACTION_STATUS_TIMEOUT = "ACTION_STATUS_TIMEOUT"
}
export interface Approver {
    address?: string;
    /** @format date-time */
    approved_at?: string;
}
export interface ArrayLiteral {
    token?: {
        type?: "ILLEGAL" | "EOF" | "IDENT" | "INT" | "COMMA" | "SEMICOLON" | "LPAREN" | "RPAREN" | "LBRACKET" | "RBRACKET" | "AND" | "OR" | "TRUE" | "FALSE";
        literal?: string;
    };
    elements?: Expression[];
}
export interface BooleanLiteral {
    token?: {
        type?: "ILLEGAL" | "EOF" | "IDENT" | "INT" | "COMMA" | "SEMICOLON" | "LPAREN" | "RPAREN" | "LBRACKET" | "RBRACKET" | "AND" | "OR" | "TRUE" | "FALSE";
        literal?: string;
    };
    value?: boolean;
}
export interface CallExpression {
    token?: {
        type?: "ILLEGAL" | "EOF" | "IDENT" | "INT" | "COMMA" | "SEMICOLON" | "LPAREN" | "RPAREN" | "LBRACKET" | "RBRACKET" | "AND" | "OR" | "TRUE" | "FALSE";
        literal?: string;
    };
    function?: {
        token?: {
            type?: "ILLEGAL" | "EOF" | "IDENT" | "INT" | "COMMA" | "SEMICOLON" | "LPAREN" | "RPAREN" | "LBRACKET" | "RBRACKET" | "AND" | "OR" | "TRUE" | "FALSE";
            literal?: string;
        };
        value?: string;
    };
    arguments?: Expression[];
}
export interface Expression {
    identifier?: {
        token?: {
            type?: "ILLEGAL" | "EOF" | "IDENT" | "INT" | "COMMA" | "SEMICOLON" | "LPAREN" | "RPAREN" | "LBRACKET" | "RBRACKET" | "AND" | "OR" | "TRUE" | "FALSE";
            literal?: string;
        };
        value?: string;
    };
    integer_literal?: {
        token?: {
            type?: "ILLEGAL" | "EOF" | "IDENT" | "INT" | "COMMA" | "SEMICOLON" | "LPAREN" | "RPAREN" | "LBRACKET" | "RBRACKET" | "AND" | "OR" | "TRUE" | "FALSE";
            literal?: string;
        };
        value?: string;
    };
    boolean_literal?: {
        token?: {
            type?: "ILLEGAL" | "EOF" | "IDENT" | "INT" | "COMMA" | "SEMICOLON" | "LPAREN" | "RPAREN" | "LBRACKET" | "RBRACKET" | "AND" | "OR" | "TRUE" | "FALSE";
            literal?: string;
        };
        value?: boolean;
    };
    array_literal?: ArrayLiteral;
    call_expression?: CallExpression;
    infix_expression?: InfixExpression;
}
export interface Identifier {
    token?: {
        type?: "ILLEGAL" | "EOF" | "IDENT" | "INT" | "COMMA" | "SEMICOLON" | "LPAREN" | "RPAREN" | "LBRACKET" | "RBRACKET" | "AND" | "OR" | "TRUE" | "FALSE";
        literal?: string;
    };
    value?: string;
}
export interface InfixExpression {
    token?: {
        type?: "ILLEGAL" | "EOF" | "IDENT" | "INT" | "COMMA" | "SEMICOLON" | "LPAREN" | "RPAREN" | "LBRACKET" | "RBRACKET" | "AND" | "OR" | "TRUE" | "FALSE";
        literal?: string;
    };
    left?: Expression;
    operator?: string;
    right?: Expression;
}
export interface IntegerLiteral {
    token?: {
        type?: "ILLEGAL" | "EOF" | "IDENT" | "INT" | "COMMA" | "SEMICOLON" | "LPAREN" | "RPAREN" | "LBRACKET" | "RBRACKET" | "AND" | "OR" | "TRUE" | "FALSE";
        literal?: string;
    };
    /** @format int64 */
    value?: string;
}
export interface Intent {
    /** @format uint64 */
    id?: string;
    creator?: string;
    name?: string;
    expression?: Expression;
}
export interface MsgActionCreated {
    action?: Action;
}
export type MsgAddKeychainPartyResponse = object;
export type MsgFulfilSignatureRequestResponse = object;
export interface MsgNewKey {
    /** @format byte */
    public_key?: string;
}
export interface MsgNewKeychainResponse {
    /** @format uint64 */
    id?: string;
}
export interface MsgNewSpaceResponse {
    /** @format uint64 */
    id?: string;
}
export interface MsgSignedData {
    /** @format byte */
    signed_data?: string;
}
export type MsgUpdateKeyRequestResponse = object;
export type MsgUpdateKeychainResponse = object;
export type MsgUpdateParamsResponse = object;
export type Params = object;
export declare enum SignMethod {
    SIGN_METHOD_BLACK_BOX = "SIGN_METHOD_BLACK_BOX",
    SIGN_METHOD_ETH = "SIGN_METHOD_ETH",
    SIGN_METHOD_OSMOSIS = "SIGN_METHOD_OSMOSIS"
}
export interface Token {
    type?: "ILLEGAL" | "EOF" | "IDENT" | "INT" | "COMMA" | "SEMICOLON" | "LPAREN" | "RPAREN" | "LBRACKET" | "RBRACKET" | "AND" | "OR" | "TRUE" | "FALSE";
    literal?: string;
}
export declare enum TokenType {
    ILLEGAL = "ILLEGAL",
    EOF = "EOF",
    IDENT = "IDENT",
    INT = "INT",
    COMMA = "COMMA",
    SEMICOLON = "SEMICOLON",
    LPAREN = "LPAREN",
    RPAREN = "RPAREN",
    LBRACKET = "LBRACKET",
    RBRACKET = "RBRACKET",
    AND = "AND",
    OR = "OR",
    TRUE = "TRUE",
    FALSE = "FALSE"
}
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";
export type QueryParamsType = Record<string | number, any>;
export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseType;
    /** request body */
    body?: unknown;
}
export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
    securityWorker?: (securityData: SecurityDataType | null) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
    secure?: boolean;
    format?: ResponseType;
}
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    instance: AxiosInstance;
    private securityData;
    private securityWorker?;
    private secure?;
    private format?;
    constructor({ securityWorker, secure, format, ...axiosConfig }?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType | null) => void;
    private mergeRequestParams;
    private createFormData;
    request: <T = any, _E = any>({ secure, path, type, query, format, body, ...params }: FullRequestParams) => Promise<AxiosResponse<T>>;
}
/**
 * @title HTTP API Console warden.warden.v1beta2
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QuerySignatureRequests
     * @request GET:/warden/warden/v1beta2/get_signature_requests
     */
    querySignatureRequests: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
        keychain_id?: string;
        status?: "SIGN_REQUEST_STATUS_UNSPECIFIED" | "SIGN_REQUEST_STATUS_PENDING" | "SIGN_REQUEST_STATUS_FULFILLED" | "SIGN_REQUEST_STATUS_REJECTED";
    }, params?: RequestParams) => Promise<AxiosResponse<{
        pagination?: {
            next_key?: string;
            total?: string;
        };
        sign_requests?: {
            id?: string;
            creator?: string;
            key_id?: string;
            data_for_signing?: string;
            status?: "SIGN_REQUEST_STATUS_UNSPECIFIED" | "SIGN_REQUEST_STATUS_PENDING" | "SIGN_REQUEST_STATUS_FULFILLED" | "SIGN_REQUEST_STATUS_REJECTED";
            signed_data?: string;
            reject_reason?: string;
        }[];
    }>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryKeyById
     * @request GET:/warden/warden/v1beta2/key_by_id
     */
    queryKeyById: (query?: {
        id?: string;
        derive_addresses?: ("ADDRESS_TYPE_UNSPECIFIED" | "ADDRESS_TYPE_ETHEREUM" | "ADDRESS_TYPE_OSMOSIS")[];
    }, params?: RequestParams) => Promise<AxiosResponse<{
        key?: {
            id?: string;
            space_id?: string;
            keychain_id?: string;
            type?: "KEY_TYPE_UNSPECIFIED" | "KEY_TYPE_ECDSA_SECP256K1" | "KEY_TYPE_EDDSA_ED25519";
            public_key?: string;
            intent_id?: string;
        };
        addresses?: {
            address?: string;
            type?: "ADDRESS_TYPE_UNSPECIFIED" | "ADDRESS_TYPE_ETHEREUM" | "ADDRESS_TYPE_OSMOSIS";
        }[];
    }>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryKeyRequestById
     * @request GET:/warden/warden/v1beta2/key_request_by_id
     */
    queryKeyRequestById: (query?: {
        id?: string;
    }, params?: RequestParams) => Promise<AxiosResponse<{
        key_request?: {
            id?: string;
            creator?: string;
            space_id?: string;
            keychain_id?: string;
            key_type?: "KEY_TYPE_UNSPECIFIED" | "KEY_TYPE_ECDSA_SECP256K1" | "KEY_TYPE_EDDSA_ED25519";
            status?: "KEY_REQUEST_STATUS_UNSPECIFIED" | "KEY_REQUEST_STATUS_PENDING" | "KEY_REQUEST_STATUS_FULFILLED" | "KEY_REQUEST_STATUS_REJECTED";
            reject_reason?: string;
            intent_id?: string;
        };
    }>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryKeyRequests
     * @request GET:/warden/warden/v1beta2/key_requests
     */
    queryKeyRequests: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
        keychain_id?: string;
        status?: "KEY_REQUEST_STATUS_UNSPECIFIED" | "KEY_REQUEST_STATUS_PENDING" | "KEY_REQUEST_STATUS_FULFILLED" | "KEY_REQUEST_STATUS_REJECTED";
        space_id?: string;
    }, params?: RequestParams) => Promise<AxiosResponse<{
        pagination?: {
            next_key?: string;
            total?: string;
        };
        key_requests?: {
            id?: string;
            creator?: string;
            space_id?: string;
            keychain_id?: string;
            key_type?: "KEY_TYPE_UNSPECIFIED" | "KEY_TYPE_ECDSA_SECP256K1" | "KEY_TYPE_EDDSA_ED25519";
            status?: "KEY_REQUEST_STATUS_UNSPECIFIED" | "KEY_REQUEST_STATUS_PENDING" | "KEY_REQUEST_STATUS_FULFILLED" | "KEY_REQUEST_STATUS_REJECTED";
            reject_reason?: string;
            intent_id?: string;
        }[];
    }>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryKeychainById
     * @request GET:/warden/warden/v1beta2/keychain_by_id
     */
    queryKeychainById: (query?: {
        id?: string;
    }, params?: RequestParams) => Promise<AxiosResponse<{
        keychain?: {
            id?: string;
            creator?: string;
            description?: string;
            admins?: string[];
            parties?: string[];
            admin_intent_id?: string;
            fees?: {
                key_req?: string;
                sig_req?: string;
            };
            is_active?: boolean;
        };
    }>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryKeychains
     * @request GET:/warden/warden/v1beta2/keychains
     */
    queryKeychains: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<AxiosResponse<{
        pagination?: {
            next_key?: string;
            total?: string;
        };
        keychains?: {
            id?: string;
            creator?: string;
            description?: string;
            admins?: string[];
            parties?: string[];
            admin_intent_id?: string;
            fees?: {
                key_req?: string;
                sig_req?: string;
            };
            is_active?: boolean;
        }[];
    }>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryAllKeys
     * @request GET:/warden/warden/v1beta2/keys
     */
    queryAllKeys: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
        derive_addresses?: ("ADDRESS_TYPE_UNSPECIFIED" | "ADDRESS_TYPE_ETHEREUM" | "ADDRESS_TYPE_OSMOSIS")[];
    }, params?: RequestParams) => Promise<AxiosResponse<{
        pagination?: {
            next_key?: string;
            total?: string;
        };
        keys?: {
            key?: {
                id?: string;
                space_id?: string;
                keychain_id?: string;
                type?: "KEY_TYPE_UNSPECIFIED" | "KEY_TYPE_ECDSA_SECP256K1" | "KEY_TYPE_EDDSA_ED25519";
                public_key?: string;
                intent_id?: string;
            };
            addresses?: {
                address?: string;
                type?: "ADDRESS_TYPE_UNSPECIFIED" | "ADDRESS_TYPE_ETHEREUM" | "ADDRESS_TYPE_OSMOSIS";
            }[];
        }[];
    }>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryKeysBySpaceId
     * @request GET:/warden/warden/v1beta2/keys_by_space_id
     */
    queryKeysBySpaceId: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
        space_id?: string;
        derive_addresses?: ("ADDRESS_TYPE_UNSPECIFIED" | "ADDRESS_TYPE_ETHEREUM" | "ADDRESS_TYPE_OSMOSIS")[];
    }, params?: RequestParams) => Promise<AxiosResponse<{
        pagination?: {
            next_key?: string;
            total?: string;
        };
        keys?: {
            key?: {
                id?: string;
                space_id?: string;
                keychain_id?: string;
                type?: "KEY_TYPE_UNSPECIFIED" | "KEY_TYPE_ECDSA_SECP256K1" | "KEY_TYPE_EDDSA_ED25519";
                public_key?: string;
                intent_id?: string;
            };
            addresses?: {
                address?: string;
                type?: "ADDRESS_TYPE_UNSPECIFIED" | "ADDRESS_TYPE_ETHEREUM" | "ADDRESS_TYPE_OSMOSIS";
            }[];
        }[];
    }>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryParams
     * @request GET:/warden/warden/v1beta2/params
     */
    queryParams: (params?: RequestParams) => Promise<AxiosResponse<{
        params?: object;
    }>>;
    /**
     * No description
     *
     * @tags Query
     * @name QuerySignatureRequestById
     * @request GET:/warden/warden/v1beta2/signature_pb_request_by_id
     */
    querySignatureRequestById: (query?: {
        id?: string;
    }, params?: RequestParams) => Promise<AxiosResponse<{
        sign_request?: {
            id?: string;
            creator?: string;
            key_id?: string;
            data_for_signing?: string;
            status?: "SIGN_REQUEST_STATUS_UNSPECIFIED" | "SIGN_REQUEST_STATUS_PENDING" | "SIGN_REQUEST_STATUS_FULFILLED" | "SIGN_REQUEST_STATUS_REJECTED";
            signed_data?: string;
            reject_reason?: string;
        };
    }>>;
    /**
     * No description
     *
     * @tags Query
     * @name QuerySpaceById
     * @request GET:/warden/warden/v1beta2/space_by_address
     */
    querySpaceById: (query?: {
        id?: string;
    }, params?: RequestParams) => Promise<AxiosResponse<{
        space?: {
            id?: string;
            creator?: string;
            owners?: string[];
            admin_intent_id?: string;
            sign_intent_id?: string;
        };
    }>>;
    /**
     * No description
     *
     * @tags Query
     * @name QuerySpaces
     * @request GET:/warden/warden/v1beta2/spaces
     */
    querySpaces: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<AxiosResponse<{
        pagination?: {
            next_key?: string;
            total?: string;
        };
        spaces?: {
            id?: string;
            creator?: string;
            owners?: string[];
            admin_intent_id?: string;
            sign_intent_id?: string;
        }[];
    }>>;
    /**
     * No description
     *
     * @tags Query
     * @name QuerySpacesByOwner
     * @request GET:/warden/warden/v1beta2/spaces_by_owner
     */
    querySpacesByOwner: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
        owner?: string;
    }, params?: RequestParams) => Promise<AxiosResponse<{
        pagination?: {
            next_key?: string;
            total?: string;
        };
        spaces?: {
            id?: string;
            creator?: string;
            owners?: string[];
            admin_intent_id?: string;
            sign_intent_id?: string;
        }[];
    }>>;
}
