create table Avion (
    id serial primary key,
    nom varchar(100),
    img varchar(100) default 'avion.jpg'
);

create table Kilometrage (
    id serial primary key,
    idAvion int references Avion(id),
    dateTrajet date,
    debutKm float,
    finKm float
);

create table Assurance (
    id serial primary key,
    idAvion int references Avion(id),
    dateAssurance date,
    dateExpiration date
);

create table TypeEntretien (
    id serial primary key,
    nom varchar(50) 
);

create table Entretien (
    id serial primary key,
    idAvion int references Avion(id),
    idTypeEntretien int references TypeEntretien(id),
    dateEntretien date
);

create table Personne (
    id serial primary key,
    nom varchar(100),
    email varchar(100) unique,
    mdp varchar(100)
);

create table Token (
    id serial primary key,
    idPersonne int references Personne(id),
    dateExpiration timestamp default now() + interval '5 minutes',
    valeur varchar(100)
);

create or replace view v_AssuranceValid as (
    select id,
        idAvion,
        (dateExpiration - current_date) as diffJour
    from assurance
); 
