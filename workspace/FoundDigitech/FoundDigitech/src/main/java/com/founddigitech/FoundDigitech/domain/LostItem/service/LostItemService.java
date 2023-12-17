package com.founddigitech.FoundDigitech.domain.LostItem.service;

import com.founddigitech.FoundDigitech.domain.LostItem.domain.LostItem;
import com.founddigitech.FoundDigitech.domain.LostItem.dto.LostItemDto;
import com.founddigitech.FoundDigitech.domain.LostItem.repository.JdbcLostItemRepository;
import com.founddigitech.FoundDigitech.global.common.SuccessResponse;
import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class LostItemService {
    private final JdbcLostItemRepository lostItemRepository;

    /**
     * @author Yun jisang
     * @description 분실물 등록
     *
     * @path /item/register
     *
     * @return LostItem id
     * @throws Exception
     */
    @Transactional
    public SuccessResponse<Long> onRegisterItem(LostItemDto.RegisterItemDto registerItemDto) throws Exception {
        Long itemId = lostItemRepository.save(registerItemDto.toEntity()).getId();

        return new SuccessResponse<Long>(true, itemId);
    }

    /**
     * @author Yun jisang
     * @description 분실물 조회
     *
     * @path /item/item?id=?
     *
     * @return LostItemDto.ItemDto
     * @throws Exception
     */
    @Transactional
    public SuccessResponse<LostItemDto.ItemDto> getItem(Long id) throws Exception {
        LostItem nowGetLostItem = lostItemRepository.findById(id);

        return new SuccessResponse<LostItemDto.ItemDto>( true, nowGetLostItem.toDTO());
    }

    public SuccessResponse<List<LostItemDto.ItemDto>> getAllItem() throws Exception {
        List<LostItem> allItems = lostItemRepository.findAll();
        List<LostItemDto.ItemDto> items = new ArrayList<>();

        for(LostItem item : allItems) {
            LostItemDto.ItemDto itemDto = item.toDTO();
            items.add(itemDto);
        }

        return new SuccessResponse<List<LostItemDto.ItemDto>>(true, items);
    }
}
