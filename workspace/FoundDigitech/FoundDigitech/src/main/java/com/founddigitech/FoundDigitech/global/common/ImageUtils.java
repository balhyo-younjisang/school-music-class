package com.founddigitech.FoundDigitech.global.common;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.concurrent.ThreadLocalRandom;

import org.springframework.util.ObjectUtils;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author Yun jisang
 * @date 2023.12.16
 * @class ImageUtils
 * @description 이미지를 저장하고 불러오는 함수를 담고 있는 클래스
 */
public class ImageUtils {
    /** 
     * @author Yun jisang
     * @date 2023.12.16
     * @method compressImage
     * @param data 이미지 파일
     * @return String 서버에 저장된 이미지 파일의 경로
     * @throws Exception
     */
    public static Long saveImage(MultipartFile imageFile) throws Exception {
        String imagePath = null;
        Long id = ThreadLocalRandom.current().nextLong(10000, 100000);
        String absolutePath = new File("").getAbsolutePath() + "\\";
        String path = "images/lostItem";
        File file = new File(path);
        
        if(!file.exists()) file.mkdirs();

        if(!imageFile.isEmpty()) {
            String contentType = imageFile.getContentType();
            String originFileExtension;

            if(ObjectUtils.isEmpty(contentType)) throw new Exception("이미지 파일은 jpg 파일만 가능합니다.");
            else {
                if(!(contentType.contains("image/jpg") || contentType.contains("image/jpeg"))) throw new Exception("이미지 파일은 jpg 파일만 가능합니다.");
                originFileExtension = ".jpg";
            }

            imagePath = path + "/" + id + originFileExtension;
            file = new File(absolutePath + imagePath);
            imageFile.transferTo(file);
        } else {
            throw new Exception("이미지 파일을 찾을 수 없습니다.");
        }

        return id;
    }

    /** 
     * @author Yun jisang
     * @date 2023.12.16
     * @method decompressImage
     * @param imageData 저장된 이미지 파일의 아이디
     * @return byte[] 저장된 이미지 파일
     */
    public static byte[] getImage(Long imageId) throws Exception {
        FileInputStream inputStream = null;
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        String absolutePath = new File("").getAbsolutePath() + "\\";
        String path = "images/lostItem";

        try {
            inputStream = new FileInputStream(absolutePath + path + "/" + imageId + ".jpg");
        } catch (FileNotFoundException e) {
            throw new Exception("파일을 찾을 수 없습니다.");
        }

        int readCount = 0;
        byte[] buffer = new byte[1024];
        byte[] fileArray = null;

        try {
            while ((readCount = inputStream.read(buffer)) != -1) {
                outputStream.write(buffer, 0, readCount);
            }
            fileArray = outputStream.toByteArray();
            inputStream.close();
            outputStream.close();
        } catch (IOException e) {
            throw new Exception("파일을 변환하는데 문제가 발생했습니다.");
        }

        return fileArray;
    }
}
