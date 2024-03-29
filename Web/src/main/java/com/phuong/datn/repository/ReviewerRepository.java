package com.phuong.datn.repository;

import com.phuong.datn.domain.Reviewer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewerRepository extends JpaRepository<Reviewer, Long> {
    Reviewer findFirstById(Long id);
}
