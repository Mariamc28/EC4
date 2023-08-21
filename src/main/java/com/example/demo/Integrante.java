package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;

@Entity
public class Integrante {

	private @Id @GeneratedValue Long id;

	@ManyToOne()
	@JoinColumn(name = "id_editorial")
	private Editorial editorial;

	@ManyToOne()
	@JoinColumn(name = "id_musico")
	private Musico musico;

	@ManyToOne()
	@JoinColumn(name = "id_instrumento")
	private Instrumento instrumento;

	public Integrante() {}

	public Integrante(Editorial editorial, Musico musico, Instrumento instrumento) {
		this.editorial = editorial;
		this.musico = musico;
		this.instrumento = instrumento;
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

    public Editorial getEditorial() {
        return editorial;
    }

    public void setEditorial(Editorial editorial) {
        this.editorial = editorial;
    }

    public Musico getMusico() {
        return musico;
    }

    public void setMusico(Musico musico) {
        this.musico = musico;
    }

    public Instrumento getInstrumento() {
        return instrumento;
    }

    public void setInstrumento(Instrumento instrumento) {
        this.instrumento = instrumento;
    }

	

}