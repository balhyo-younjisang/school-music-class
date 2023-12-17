package com.founddigitech.FoundDigitech.domain.LostItem.repository;

import com.founddigitech.FoundDigitech.domain.LostItem.domain.LostItem;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import javax.sql.DataSource;

@Repository
public class JdbcLostItemRepository {
    private final JdbcTemplate jdbcTemplate;

    public JdbcLostItemRepository(DataSource dataSource) {
        // datasource -> properties 파일에서 설정한 DB 관련 정보들이 담김
        jdbcTemplate = new JdbcTemplate(dataSource);
    }

    RowMapper<LostItem> itemRowMapper = new RowMapper<LostItem>() {
        @Override
        public LostItem mapRow(ResultSet rs, int rowNum) throws SQLException {
            return LostItem.builder().id(rs.getLong("id")).name(rs.getString("name")).description(rs.getString("description")).get_date(rs.getDate("get_date")).imageId(rs.getLong("imageData")).isFound(rs.getBoolean("isFound")).build();
        }
    };

    public LostItem save(LostItem lostItem) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        String sql ="INSERT INTO ITEMS(id, name, description, get_date, imageData) VALUES(auto_increment.NEXTVAL,?,?, (SELECT SYSDATE FROM dual),?)";
        this.jdbcTemplate.update(con -> {
            PreparedStatement ps = con.prepareStatement(sql, new String[]{"id"});
            ps.setString(1, lostItem.getName());
            ps.setString(2, lostItem.getDescription());
            ps.setLong(3, lostItem.getImageId());

            return ps;
        }, keyHolder);

        long id = keyHolder.getKey().longValue();
        lostItem.setId(id);

        return lostItem;
    }

    public LostItem findById(Long id) {
        String sql = "SELECT * FROM ITEMS WHERE id = ?";

        return this.jdbcTemplate.queryForObject(sql, itemRowMapper, id);
    }

    public List<LostItem> findAll() {
        String sql = "SELECT * FROM ITEMS";

        return this.jdbcTemplate.query(sql, itemRowMapper);
    }
}
