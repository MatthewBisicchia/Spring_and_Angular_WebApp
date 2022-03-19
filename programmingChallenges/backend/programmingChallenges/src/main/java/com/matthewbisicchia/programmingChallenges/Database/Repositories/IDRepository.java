package com.matthewbisicchia.programmingChallenges.Database.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.matthewbisicchia.programmingChallenges.Model.DataTypes.ID;

public interface IDRepository extends JpaRepository<ID, Long> {

}
