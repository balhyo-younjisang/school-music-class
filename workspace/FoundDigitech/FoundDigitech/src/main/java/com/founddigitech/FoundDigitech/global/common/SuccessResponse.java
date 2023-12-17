package com.founddigitech.FoundDigitech.global.common;

import lombok.Data;

/**
 * @author Yun jisang
 * @description 클라이언트에게 성공 정보를 반환하는 객체
 */


@Data
public class SuccessResponse<T> {
    private boolean success; // 성공 여부
    private T data; // 결과 값

    public SuccessResponse(boolean success, T data) {
        this.success = success;
        this.data = data;
    }
}
