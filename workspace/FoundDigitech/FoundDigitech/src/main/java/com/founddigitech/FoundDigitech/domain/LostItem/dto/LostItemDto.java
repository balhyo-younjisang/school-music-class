package com.founddigitech.FoundDigitech.domain.LostItem.dto;
import com.founddigitech.FoundDigitech.domain.LostItem.domain.LostItem;
import com.founddigitech.FoundDigitech.global.common.ImageUtils;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

import org.springframework.web.multipart.MultipartFile;

public class LostItemDto {

    @Getter
    @Setter
    @Builder
    public static class ItemDto {
        private Long id; // 분실물 id ( pk )
        private String name; // 분실물 이름
        private String description; // 분실물 설명
        private Date date; // 습득 날짜
        private byte[] imageId;
        private Boolean isFound;
    }

    @Getter
    @AllArgsConstructor
    public static class RegisterItemDto {
        private String name; // 분실물 이름
        private String description; // 분실물 설명
        private MultipartFile imageFile;  // 분실물 이미지

        public LostItem toEntity() throws Exception {
            return LostItem.builder().name(name).description(description).imageId(ImageUtils.saveImage(imageFile)).build();
        }
    }

    @Getter
    @Setter
    public static class FoundItemDto {
        private Long studentId; // 학번
        private String name; // 이름
    }
}
