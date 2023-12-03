package fr.sdv.cnit.university.tpteamshandlingapi.repository;

import fr.sdv.cnit.university.tpteamshandlingapi.entity.TeamEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeamRepository extends JpaRepository<TeamEntity, Long> {
}
