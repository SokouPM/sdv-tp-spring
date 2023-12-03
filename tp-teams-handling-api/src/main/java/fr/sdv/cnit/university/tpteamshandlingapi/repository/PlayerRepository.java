package fr.sdv.cnit.university.tpteamshandlingapi.repository;

import fr.sdv.cnit.university.tpteamshandlingapi.entity.PlayerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlayerRepository extends JpaRepository<PlayerEntity, Long> {
}
