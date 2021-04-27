package com.phuong.datn.domain;


import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "topic")
public class Topic extends AbstractAuditingEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "topicname")
    private String topicName;

    @Column(name = "description")
    private String description;

    @Column(name = "status")
    private String status;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTopicName() {
        return topicName;
    }

    public void setTopicName(String topicName) {
        this.topicName = topicName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Topic{" +
            "id=" + id +
            ", topicName='" + topicName + '\'' +
            ", description='" + description + '\'' +
            ", status='" + status + '\'' +
            '}';
    }
}