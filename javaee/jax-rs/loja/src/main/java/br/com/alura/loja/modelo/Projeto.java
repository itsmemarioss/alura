package br.com.alura.loja.modelo;

import com.thoughtworks.xstream.XStream;

/**
 * @author mario
 *
 */
public class Projeto {
	
	private String nome;
	private long id;
	private int anoDeInicio;
	
	public Projeto() {}

	public Projeto(long id, String nome, int anoDeInicio) {
		super();
		this.nome = nome;
		this.id = id;
		this.anoDeInicio = anoDeInicio;
	}
	
	public String getNome() {
		return nome;
	}
	
	public void setId(long id) {
		this.id = id;
	}

	public long getId() {
		return id;
	}
	public int getAnoDeInicio() {
		return anoDeInicio;
	}
	
	public String toXML() {
		return new XStream().toXML(this);
	}
	

}
