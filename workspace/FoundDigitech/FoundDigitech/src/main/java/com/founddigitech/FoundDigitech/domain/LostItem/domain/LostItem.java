package com.founddigitech.FoundDigitech.domain.LostItem.domain;
import com.founddigitech.FoundDigitech.domain.LostItem.dto.LostItemDto;
import com.founddigitech.FoundDigitech.domain.LostItem.dto.LostItemDto.ItemDto;
import com.founddigitech.FoundDigitech.global.common.ImageUtils;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LostItem {
    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // 분실물 Id ( pk )

    @Getter
    @Column(nullable = false)
    private String name; // 분실물 이름

    @Getter
    @Column(nullable = false)
    private String description; // 분실물 설명
    
    @Getter
    @Column(nullable = false)
    private Date get_date; // 습득 날짜

    @Lob
    @Getter
    @Column(nullable = false)
    private Long imageId;

    @Getter
    @Column(nullable =  false)
    private Boolean isFound;

    public ItemDto toDTO() throws Exception {
        return LostItemDto.ItemDto.builder().id(id).name(name).description(description).date(get_date).imageId(ImageUtils.getImage(imageId)).isFound(isFound).build();
    }
}
