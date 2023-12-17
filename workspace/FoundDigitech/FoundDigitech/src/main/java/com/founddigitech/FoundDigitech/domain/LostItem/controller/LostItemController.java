package com.founddigitech.FoundDigitech.domain.LostItem.controller;

import com.founddigitech.FoundDigitech.domain.LostItem.dto.LostItemDto;
import com.founddigitech.FoundDigitech.domain.LostItem.service.LostItemService;
import com.founddigitech.FoundDigitech.global.common.SuccessResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.charset.StandardCharsets;
import java.util.List;

@RestController
@RequestMapping("/item")
@RequiredArgsConstructor
public class LostItemController {
    private final LostItemService lostItemService;

    /**
     * @author Yun jisang
     * @description 분실물 등록 컨트롤러
     *
     * @path /item/register
     *
     * @return LostItem id
     * @throws Exception
     */
    @PostMapping(value = "/register")
    public ResponseEntity<SuccessResponse<Long>> onRegisterItem(@ModelAttribute @Valid LostItemDto.RegisterItemDto registerItemDto) throws Exception {
        SuccessResponse<Long> response = this.lostItemService.onRegisterItem(registerItemDto);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(new MediaType("application", "json", StandardCharsets.UTF_8));

        return new ResponseEntity<>(response, headers, HttpStatus.CREATED);
    }

    /**
     * @author Yun jisang
     * @description 분실물 조회
     *
     * @path /item/item?id=
     *
     * @return LostItem
     * @throws Exception
     */
    @GetMapping(value = "/item")
    public ResponseEntity<SuccessResponse<LostItemDto.ItemDto>> getItem(@RequestParam("id") Long id) throws Exception {
        SuccessResponse<LostItemDto.ItemDto> response = this.lostItemService.getItem(id);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(new MediaType("application", "json", StandardCharsets.UTF_8));

        return new ResponseEntity<>(response, headers, HttpStatus.OK);
    }

    /**
     * @author Yun jisang
     * @description 분실물 리스트 조회
     * 
     * @path /item/all
     * 
     * @return lostItem[]
     * @throws Exception
     */
    @GetMapping(value = "/all")
    public ResponseEntity<SuccessResponse<List<LostItemDto.ItemDto>>> getAllItem() throws Exception {
        SuccessResponse<List<LostItemDto.ItemDto>> response = this.lostItemService.getAllItem();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(new MediaType("application", "json", StandardCharsets.UTF_8));

        return new ResponseEntity<>(response, headers, HttpStatus.OK);
    }
//
//    /**
//     * @author Yun Jisang
//     * @description 분실물 찾음
//     *
//     * @path /item/found/{id}
//     *
//     * @return void
//     */
//    @PostMapping(value = "/found/{id}")
//    public ResponseEntity<SuccessResponse<>> foundItem(@PathVariable("id") Long id, @RequestBody @Valid LostItemDto.FoundItemDto foundItemDto) {
//        SuccessResponse response = this.lostItemService.onFoundItem(id);
//
//        HttpHeaders headers = new HttpHeaders();
//        headers.setContentType(new MediaType("application", "json", StandardCharsets.UTF_8));
//
//        return new ResponseEntity<>(response, headers, HttpStatus.OK);
//    }
//
//    /**
//     * @author Yun jisang
//     * @description 분실물 등록 삭제
//     *
//     * @path /item/delete/{id}
//     *
//     * @return Boolean
//     */
//    @DeleteMapping(value = "/delete/{id}")
//    public ResponseEntity<SuccessResponse> deleteItem(@PathVariable("id") Long id) {
//        SuccessResponse response = this.lostItemService.deleteItem(id);
//
//        HttpHeaders headers = new HttpHeaders();
//        headers.setContentType(new MediaType("application", "json", StandardCharsets.UTF_8));
//
//        return new ResponseEntity<>(response, headers, HttpStatus.OK);
//    }
}
