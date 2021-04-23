/* 
Fichier : Test_GroupeG.sql
Auteur: 
Mathieu ALBIN 21812612
Nom du Groupe : G
*/

/* Test des triggers */

	/* Test du trigger EVENEMENT_THEMES_SIMILAIRE
		insertion d'un evenement avec un thème, une ville et une date similaire a un evenement existant */
		INSERT INTO EVENEMENT VALUES (15, "nba 2k20 festival",DEFAULT, DEFAULT, 50, 100,"2020-01-16","2020-01-17","LYON", "10 rue de l'université", "c1", 2);

		/* Affichage pour vérifier que l'erreur a bien été sauvegardé dans le log */
		SELECT * FROM LOGERROR ;



	/*Test trigger Date_Correcte
		insertion d'un evenement avec une date de début supérieur a la date de fin*/
		INSERT INTO EVENEMENT VALUES (15, "nba 2k20 festival",DEFAULT, DEFAULT, 50, 100,"2020-02-01","2020-01-17","LYON", "10 rue de l'université", "c1", 2);

		/* Affichage pour vérifier que l'erreur a bien été sauvegardé dans le log */
		SELECT * FROM LOGERROR ;



	/*Test trigger Evenement_effectif
		insertion d'un evenement avec un effectif minimum trop bas */
		INSERT INTO EVENEMENT VALUES (15, "nba 2k20 festival",DEFAULT, DEFAULT, 20, 100,"2020-02-01","2020-02-03","MONTPELLIER", "10 rue de l'université", "c1", 2);

		/* Affichage pour vérifier que l'erreur a bien été sauvegardé dans le log */
		SELECT * FROM LOGERROR ;

		/* insertion d'un evenement avec un effectif maximum trop haut */
		INSERT INTO EVENEMENT VALUES (15, "nba 2k20 festival",DEFAULT, DEFAULT, 50, 5000,"2020-02-01","2020-02-03","MONTPELLIER", "10 rue de l'université", "c1", 2);

		/* Affichage pour vérifier que l'erreur a bien été sauvegardé dans le log */
		SELECT * FROM LOGERROR ;

		/* insertion d'un evenement avec un effectif minimum suppérieur a l'effectif minimum */
		INSERT INTO EVENEMENT VALUES (15, "nba 2k20 festival",DEFAULT, DEFAULT, 300, 100,"2020-02-01","2020-02-03","MONTPELLIER", "10 rue de l'université", "c1", 2);

		/* Affichage pour vérifier que l'erreur a bien été sauvegardé dans le log */
		SELECT * FROM LOGERROR ;


	/* insertion d'un evenement correcte et sans restriction d'âge*/
	INSERT INTO EVENEMENT VALUES (15, "La période des Royaumes Combattants",DEFAULT, DEFAULT, 50, 1000,"2020-02-01","2020-02-03","MONTPELLIER", "10 rue de l'université", "c3", 5);

	SELECT * FROM EVENEMENT;


	/* Test trigger Restriction_AGE
	  	insertion d'une participation a un evenement avec une restriction d'age minimum*/
	  	INSERT INTO PARTICIPER VALUES (12, "v1", NULL);

	 	/* Affichage pour vérifier que l'erreur a bien été sauvegardé dans le log */
		SELECT * FROM LOGERROR ;

		/*insertion d'une participation a un evenement avec une restriction d'age minimum*/
	  	INSERT INTO PARTICIPER VALUES (14, "v5", NULL);

	  	/* Affichage pour vérifier que l'erreur a bien été sauvegardé dans le log */
		SELECT * FROM LOGERROR ;

		/*insertion d'une participation a un evenement sans le noter*/
	  	INSERT INTO PARTICIPER VALUES (15, "v5", NULL);

	  	SELECT * FROM PARTICIPER;

	/* Test trigger Depassement_Note
		insertion d'une note supérieur a 20 */
		INSERT INTO PARTICIPER VALUES (15, "v1", 25);

		/* Affichage pour vérifier que l'erreur a bien été sauvegardé dans le log */
		SELECT * FROM LOGERROR ;

		/*insertion d'une note négative*/
		INSERT INTO PARTICIPER VALUES (15, "v1", -3);

		/* Affichage pour vérifier que l'erreur a bien été sauvegardé dans le log */
		SELECT * FROM LOGERROR ;

		/*insertion d'une note correcte*/
	  	INSERT INTO PARTICIPER VALUES (15, "v1", 15);

	  	SELECT * FROM PARTICIPER;


/* Test des fonctions 

    Test fonction APPRECIATION_EVENT */

		SELECT IDEVENEMENT, DESCRIPTIF, APPRECIATION_EVENT(IDEVENEMENT)
		FROM EVENEMENT
		ORDER BY IDEVENEMENT;

	/* Test fonction AGE_MOYEN */

		SELECT IDEVENEMENT, DESCRIPTIF, AGE_MOYEN(IDEVENEMENT)
		FROM EVENEMENT
		ORDER BY IDEVENEMENT;

	/* Test fonction STATUT_EVENEMENT */
	
		SELECT IDEVENEMENT, DESCRIPTIF, STATUT_EVENEMENT(IDEVENEMENT, '2020-02-02')
		FROM EVENEMENT
		ORDER BY IDEVENEMENT;