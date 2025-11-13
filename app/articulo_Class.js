class articulo extends EntidadAbstracta {

	constructor(esTest) {

		super();
        
		this.columnasamostrar = ['ISSN', 'TituloA'],  
		this.mostrarespecial = ['FicheropdfA', 'FechaPublicacionR'];
		this.nombreentidad = 'articulo';

		// definicion de los atributos del formulario (Necesario para test de unidad)
		this.attributes = [
			'CodigoA',//antiguo loguin --> diferente caracteristica texto a int
			'AutoresA',//antiguo passwrd --> misma caracteristica texto
			'TituloA', //antiguo nombre --> misma caracteristica texto
			'TituloR', 
			'ISSN', //--> posible ISSN?
			'VolumenR', //antiguo telefono --> nada que ver ahora es varchar
			'PagIniA', //int(4)
            'PagFinA', //int(4)
            'FechaPublicacionR', //date ????
			'FicheropdfA',
            'EstadoA',

		];




	}

	/**
	 * replace the content of section element with a particular entity menu
	 * @returns 
	 */
	manual_form_creation() {
	
			var form_content = `
				<form id = 'form_iu'  action="http://193.147.87.202/procesaform.php" method="POST" enctype="multipart/form-data" ">
	
				
				<label class="label_CodigoA"></label>
				<input type='text' id='CodigoA' name='CodigoA' ></input>
				<span id="span_error_CodigoA" ><a id="error_CodigoA"></a></span>
				<br>
	
				<label class="label_AutoresA"></label>
				<input type='text' id='AutoresA' name='AutoresA' ></input>
				<span id="span_error_AutoresA" ><a id="error_AutoresA"></a></span>
				<br>
				
				<label class="label_TituloA"></label>
				<input type='text' id='TituloA' name='TituloA'  ></input>
				<span id="span_error_TituloA" ><a id="error_TituloA"></a></span>
				<br>
	
				<label class="label_TituloR"></label>
				<input type='text' id='TituloR' name='TituloR'></input>
				<span id="span_error_TituloR" ><a id="error_TituloR"></a></span>
				<br>
				
				<label class="label_ISSN">  </label>
				<input type='text' id='ISSN' name='ISSN' ></input>
				<span id="span_error_ISSN"><a id="error_ISSN"></a></span>
				<br>
	
					
				<label class="label_VolumenR">  </label>
				<input type='text' id='VolumenR' name='VolumenR'  ></input>
				<span id="span_error_VolumenR"><a id="error_VolumenR"></a></span>
				<br>
	
				<label class="label_PagIniiA">  </label>
				<input type='text' id='PagIniiA' name='PagIniiA' ></input>
				<span id="span_error_PagIniiA"><a id="error_PagIniiA"></a></span>
				<br>
	
				<label class="label_PagFinA">  </label>
				<input type='text' id='PagFinA' name='PagFinA'  ></input>
				<span id="span_error_PagFinA"><a id="error_PagFinA"></a></span>
				<br>
			 
				<label class="label_FechaPublicacionR">  </label>
				<input type='text' id='FechaPublicacionR' name='FechaPublicacionR'    placeholder="dd/mm/yyyy"></input>
				<span id="span_error_FechaPublicacionR"><a id="error_FechaPublicacionR"></a></span>
				<br>
	
				<label id="label_FicheropdfA" class="label_FicheropdfA">Foto Acto</label>
				<input type='text' id='FicheropdfA' name='FicheropdfA'></input>
				<span id="span_error_FicheropdfA"><a id="error_FicheropdfA"></a></span>
				<a id="link_FicheropdfA" href="http://193.147.87.202/ET2/filesuploaded/files_FicheropdfA/"><img src="./iconos/FILE.png" /></a>
				
				<label id="label_nuevo_FicheropdfA" class="label_nuevo_FicheropdfA"></label>
				<input type='file' id='nuevo_FicheropdfA' name='nuevo_FicheropdfA'></input>
				<span id="span_error_nuevo_FicheropdfA"><a id="error_nuevo_FicheropdfA"></a></span>
				
	
				<br>
				<label for="EstadoA" class="EstadoA">Estado:</label><br>
	
				<select id="EstadoA" name="EstadoA">
					<option value="">Seleccione un estado</option>
					<option value="Enviado" class="Enviado">Enviado</option>
					<option value="Revision" class="Revision">Revisión</option>
					<option value="Publicado" class="Publicado">Publicado</option>
				</select>
	
				<span id="span_error_EstadoA"><a id="error_EstadoA"></a></span>
				<br>
	
			 
	
				<input id="submit_button" type="submit" value="Submit">
	
			</form>
			`;
			return form_content;
	
		}
	

    /**********************************************************************************************
		fields validations for ADD
	***********************************************************************************************/

	/** 
		
		@param 
		@return
			{string} Error code of field value (fieldname_validationfunction_KO) 
			or
			{bool} true due the field value is correct

	*/

	/**
		
		@param 
		@return
			{string} Error code of field value (fieldname_validationfunction_KO) 
			or
			{bool} true due the field value is correct

	*/

	/* Validaciones para ADD/EDIT */


	ADD_AutoresA_validation() {
		if (!(this.not_empty('AutoresA'))) {
			this.dom.mostrar_error_campo('AutoresA', 'AutoresA_vacio_KO');
			return "AutoresA_vacio_KO";
		}

		if (!(this.validations.min_size('AutoresA', 4))) {
			this.dom.mostrar_error_campo('AutoresA', 'AutoresA_min_size_KO');
			return "AutoresA_min_size_KO";
		}

		if (!(this.validations.max_size('AutoresA', 200))) {
			this.dom.mostrar_error_campo('AutoresA', 'AutoresA_max_size_KO');
			return "AutoresA_max_size_KO";
		}

		if (!(this.validations.format('AutoresA', '^[A-Za-zÁÉÍÓÚÜÑáéíóúüñÇçÀÈÌÒÙâêîôûáàäëïöüõçÇ]+$'))) {
			this.dom.mostrar_error_campo('AutoresA', 'AutoresA_format_KO');
			return "AutoresA_format_KO";
		}

		this.dom.mostrar_exito_campo('AutoresA');
		return true;

	}

	ADD_TituloA_validation() {
		if (!(this.not_empty('TituloA'))) {
			this.dom.mostrar_error_campo('TituloA', 'tituloA_vacio_KO');
			return "tituloA_vacio_KO";
		}

		if (!(this.validations.min_size('TituloA', 2))) {
			this.dom.mostrar_error_campo('TituloA', 'tituloA_min_size_KO');
			return "tituloA_min_size_KO";
		}

		if (!(this.validations.max_size('TituloA', 100))) {
			this.dom.mostrar_error_campo('TituloA', 'tituloA_max_size_KO');
			return "tituloA_max_size_KO";
		}

		if (!(this.validations.format('TituloA', '^[A-Za-zÁÉÍÓÚÜÑñáéíóúü ]+$'))) {
			this.dom.mostrar_error_campo('TituloA', 'tituloA_format_KO');
			return "tituloA_format_KO";
		}

		this.dom.mostrar_exito_campo('TituloA');
		return true;

	}

	ADD_TituloR_validation() {

		if (!(this.not_empty('TituloR'))) {
			this.dom.mostrar_error_campo('TituloR', 'TituloR_vacio_KO');
			return "TituloR_vacio_KO";
		}

		if (!(this.validations.min_size('TituloR', 2))) {
			this.dom.mostrar_error_campo('TituloR', 'TituloR_min_size_KO');
			return "TituloR_min_size_KO";
		}

		if (!(this.validations.max_size('TituloR', 100))) {
			this.dom.mostrar_error_campo('TituloR', 'TituloR_max_size_KO');
			return "TituloR_max_size_KO";
		}

		if (!(this.validations.format('TituloR', '^[A-Za-zÁÉÍÓÚÜÑñáéíóúü ]+$'))) {
			this.dom.mostrar_error_campo('TituloR', 'TituloR_format_KO');
			return "TituloR_format_KO";
		}

		this.dom.mostrar_exito_campo('TituloR');
		return true;

	}

	ADD_EstadoA_validation() {

		const allowed = ['Enviado','Revision','Publicado'];
		const el = document.getElementById('EstadoA');
		const value = el ? el.value : '';

		if (!value) {
			this.dom.mostrar_error_campo('EstadoA', 'EstadoA_vacio_KO');
			return 'EstadoA_vacio_KO';
		}

		if (!allowed.includes(value)) {
			this.dom.mostrar_error_campo('EstadoA', 'EstadoA_format_KO');
			return 'EstadoA_format_KO';
		}

		this.dom.mostrar_exito_campo('EstadoA');
		return true;

	} 

	ADD_ISSN_validation() {

		let id = "ISSN";
		if (!(this.not_empty('ISSN'))) {
			this.dom.mostrar_error_campo('ISSN', 'ISSN_vacio_KO');
			return "ISSN_vacio_KO";
		}

		if (!this.validations.min_size(id, 9)) {
			this.dom.mostrar_error_campo(id, "ISSN_min_size_KO");
			return "ISSN_min_size_KO";
		}
		if (!this.validations.max_size(id, 9)) {
			this.dom.mostrar_error_campo(id, "ISSN_max_size_KO");
			return "ISSN_max_size_KO";
		}
		if (!this.validations.format(id, "^\d{4}-\d{3}[\dX]$")) {
			this.dom.mostrar_error_campo(id, "ISSN_format_KO");
			return "ISSN_format_KO";
		}
		if (!this.validacionISSN(document.getElementById(id).value)) {
			this.dom.mostrar_error_campo(id, "ISSN_format_KO");
			return "ISSN_format_KO";
		}

		this.dom.mostrar_exito_campo(id);
		return true;
	}

	ADD_VolumenR_validation() {

		if (!(this.not_empty('VolumenR'))) {
			this.dom.mostrar_error_campo('VolumenR', 'VolumenR_vacio_KO');
			return "VolumenR_vacio_KO";
		}

		if (!(this.validations.min_size('VolumenR', 1))) {
			this.dom.mostrar_error_campo('VolumenR', 'VolumenR_min_size_KO');
			return "VolumenR_min_size_KO";
		}

		if (!(this.validations.max_size('VolumenR', 4))) {
			this.dom.mostrar_error_campo('VolumenR', 'VolumenR_max_size_KO');
			return "VolumenR_max_size_KO";
		}

		if (!(this.validations.format('VolumenR', '^[0-9]+$'))) {
			this.dom.mostrar_error_campo('VolumenR', 'VolumenR_format_KO');
			return "VolumenR_format_KO";
		}

		this.dom.mostrar_exito_campo('VolumenR');
		return true;

	}

	ADD_PagIniA_validation() {

		if (!(this.not_empty('PagIniA'))) {
			this.dom.mostrar_error_campo('PagIniA', 'PagIniA_vacio_KO');
			return "PagIniA_vacio_KO";
		}

		if (!(this.max_size(4))) {
			this.dom.mostrar_error_campo('PagIniA', 'PagIniA_max_size_KO');
			return "PagIniA_max_size_KO";
		}

		if (!(this.validations.format('PagIniA', '^[0-9]+$'))) {
			this.dom.mostrar_error_campo('PagIniA', 'PagIniA_format_KO');
			return "PagIniA_format_KO";
		}

		this.dom.mostrar_exito_campo('PagIniA');
		return true;

	}

	ADD_PagFinA_validation() {

		if (!(this.not_empty('PagFinA'))) {
			this.dom.mostrar_error_campo( 'PagFinA_vacio_KO');
			return "PagFinA_vacio_KO";
		}


		if (!(this.validations.max_size( 4))) {
			this.dom.mostrar_error_campo( 'PagFinA_max_size_KO');
			return "PagFinA_max_size_KO";
		}

		if (!(this.validations.format( '^[0-9]$'))) {
			this.dom.mostrar_error_campo( 'PagFinA_format_KO');
			return "PagFinA_format_KO";
		}

		this.dom.mostrar_exito_campo('PagFinA');
		return true;

	}

	// AAD fechapublicacion
	ADD_FechaPublicacionR_validation() {
		
			if (!(this.validations.min_size('FechaPublicacionR', 10))) {
				this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_min_size_KO');
				return "FechaPublicacionR_min_size_KO";
			}
	
			if (!(this.validations.max_size('FechaPublicacionR', 10))) {
				this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_max_size_KO');
				return "FechaPublicacionR_max_size_KO";
			}
	
			if (!(this.validations.format('FechaPublicacionR', '[0-9]{2,}[/][0-9]{2,}[/][0-9]{4,}'))) {
				this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_format_KO');
				return "FechaPublicacionR_format_KO";
			}
	 
			this.dom.mostrar_exito_campo('FechaPublicacionR');
			return true;
	    
	}
	

	ADD_nuevo_FicheropdfA_validation() {

		if (!(this.validations.not_exist_file('nuevo_FicheropdfA'))) {
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_vacio_KO');
			return "nuevo_FicheropdfA_vacio_KO";
		}

		if (!(this.validations.max_size_file('nuevo_FicheropdfA', 20000000))) {
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_max_size_KO');
			return "nuevo_FicheropdfA_max_size_KO";
		}


		if (!(this.min_size_nombrePdf(5))) {
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_tituloAfoto_min_size_KO');
			return "nuevo_FicheropdfA_nombrePfd_min_size_KO";
		}

		if (!(this.max_size(40))) {
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_nombrePfd_max_size_KO');
			return "nuevo_FicheropdfA_nombrePfd_max_size_KO";
		}

		if (!(this.validations.type_file('nuevo_FicheropdfA', ['aplication/pdf']))) {
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_format_KO');
			return "nuevo_FicheropdfA_format_KO";
		}
		if (!(this.validations.format_name_file('nuevo_FicheropdfA', '^[A-Za-z0-9áéíóúüñçÁÉÍÓÚÜÑÇ]\.pdf$'))) {
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_nombrePfd_format_KO');
			return "nuevo_FicheropdfA_nombrePfd_format_KO";
		}

		this.dom.mostrar_exito_campo('nuevo_FicheropdfA');
		return true;

	}

	/**
		
		@param 
		@return
			{bool} true if all field validations are correct or false if any field validation is false

	*/
	ADD_submit_articulo() {

		let result = (
			
			(this.ADD_AutoresA_validation()) &
			(this.ADD_TituloA_validation()) &
			(this.ADD_TituloR_validation()) &
			(this.ADD_EstadoA_validation()) &
			(this.ADD_ISSN_validation()) &
			(this.ADD_VolumenR_validation()) &
			(this.ADD_PagIniA_validation()) &
			(this.ADD_PagFinA_validation()) &
			(this.ADD_Fechapublicacion_validation())&
			(this.ADD_nuevo_FicheropdfA_validation())

		)

		result = Boolean(result);

		return result;


	}



	EDIT_AutoresA_validation() {
		if (!(this.not_empty('AutoresA'))) {
			this.dom.mostrar_error_campo('AutoresA', 'AutoresA_vacio_KO');
			return "AutoresA_vacio_KO";
		}

		if (!(this.validations.min_size('AutoresA', 4))) {
			this.dom.mostrar_error_campo('AutoresA', 'AutoresA_min_size_KO');
			return "AutoresA_min_size_KO";
		}

		if (!(this.validations.max_size('AutoresA', 200))) {
			this.dom.mostrar_error_campo('AutoresA', 'AutoresA_max_size_KO');
			return "AutoresA_max_size_KO";
		}

		if (!(this.validations.format('AutoresA', '^[A-Za-zÁÉÍÓÚÜÑñáéíóúü ]+$'))) {
			this.dom.mostrar_error_campo('AutoresA', 'AutoresA_format_KO');
			return "AutoresA_format_KO";
		}

		this.dom.mostrar_exito_campo('AutoresA');
		return true;

	}

	EDIT_TituloA_validation() {

		if (!(this.not_empty('TituloA'))) {
			this.dom.mostrar_error_campo('TituloA', 'tituloA_vacio_KO');
			return "tituloA_vacio_KO";
		}

		if (!(this.validations.min_size('TituloA', 2))) {
			this.dom.mostrar_error_campo('TituloA', 'tituloA_min_size_KO');
			return "tituloA_min_size_KO";
		}

		if (!(this.validations.max_size('TituloA', 100))) {
			this.dom.mostrar_error_campo('TituloA', 'tituloA_max_size_KO');
			return "tituloA_max_size_KO";
		}

		if (!(this.validations.format('TituloA', '^[A-Za-zÁÉÍÓÚÜÑñáéíóúü ]+$'))) {
			this.dom.mostrar_error_campo('TituloA', 'tituloA_format_KO');
			return "tituloA_format_KO";
		}

		this.dom.mostrar_exito_campo('TituloA');
		return true;

	}

	EDIT_TituloR_validation() {

		if (!(this.not_empty('TituloR'))) {
			this.dom.mostrar_error_campo('TituloR', 'TituloR_vacio_KO');
			return "TituloR_vacio_KO";
		}

		if (!(this.validations.min_size('TituloR', 2))) {
			this.dom.mostrar_error_campo('TituloR', 'TituloR_min_size_KO');
			return "TituloR_min_size_KO";
		}

		if (!(this.validations.max_size('TituloR', 100))) {
			this.dom.mostrar_error_campo('TituloR', 'TituloR_max_size_KO');
			return "TituloR_max_size_KO";
		}

		if (!(this.validations.format('TituloR', '^[A-Za-zÁÉÍÓÚÜÑñáéíóúü ]+$'))) {
			this.dom.mostrar_error_campo('TituloR', 'TituloR_format_KO');
			return "TituloR_format_KO";
		}

		this.dom.mostrar_exito_campo('TituloR');
		return true;

	}

	EDIT_EstadoA_validation() {

		const allowed = ['Enviado','Revision','Publicado'];
		const el = document.getElementById('EstadoA');
		const value = el ? el.value : '';

		if (!value) {
			this.dom.mostrar_error_campo('EstadoA', 'EstadoA_vacio_KO');
			return 'EstadoA_vacio_KO';
		}

		if (!allowed.includes(value)) {
			this.dom.mostrar_error_campo('EstadoA', 'EstadoA_format_KO');
			return 'EstadoA_format_KO';
		}

		this.dom.mostrar_exito_campo('EstadoA');
		return true;

	}

	EDIT_ISSN_validation() {
		let id = "ISSN";
		if (!(this.not_empty('ISSN'))) {
			this.dom.mostrar_error_campo('ISSN', 'ISSN_vacio_KO');
			return "ISSN_vacio_KO";
		}

		if (!this.validations.min_size(id, 9)) {
			this.dom.mostrar_error_campo(id, "ISSN_min_size_KO");
			return "ISSN_min_size_KO";
		}
		if (!this.validations.max_size(id, 9)) {
			this.dom.mostrar_error_campo(id, "ISSN_max_size_KO");
			return "ISSN_max_size_KO";
		}
		if (!this.validations.format(id, "^[0-9]{4}-[0-9]{4}$")) {
			this.dom.mostrar_error_campo(id, "ISSN_format_KO");
			return "ISSN_format_KO";
		}
		if (!this.validacionISSN(document.getElementById(id).value)) {
			this.dom.mostrar_error_campo(id, "ISSN_format_KO");
			return "ISSN_format_KO";
		}

		this.dom.mostrar_exito_campo(id);
		return true;
	}

	EDIT_VolumenR_validation() {
		if (!(this.not_empty('VolumenR'))) {
			this.dom.mostrar_error_campo('VolumenR', 'VolumenR_vacio_KO');
			return "VolumenR_vacio_KO";
		}

		if (!(this.validations.max_size('VolumenR', 4))) {
			this.dom.mostrar_error_campo('VolumenR', 'VolumenR_max_size_KO');
			return "VolumenR_max_size_KO";
		}

		if (!(this.validations.format('VolumenR', '^[0-9]+$'))) {
			this.dom.mostrar_error_campo('VolumenR', 'VolumenR_format_KO');
			return "VolumenR_format_KO";
		}

		this.dom.mostrar_exito_campo('VolumenR');
		return true;

	}

	EDIT_PagIniA_validation() {

		if (!(this.not_empty('PagIniA'))) {
			this.dom.mostrar_error_campo('PagIniA', 'PagIniA_vacio_KO');
			return "PagIniA_vacio_KO";
		}

		if (!(this.max_size(4))) {
			this.dom.mostrar_error_campo('PagIniA', 'PagIniA_max_size_KO');
			return "PagIniA_max_size_KO";
		}

		if (!(this.validations.format('PagIniA', '^[0-9]+$'))) {
			this.dom.mostrar_error_campo('PagIniA', 'PagIniA_format_KO');
			return "PagIniA_format_KO";
		}

		this.dom.mostrar_exito_campo('PagIniA');
		return true;

	}

	EDIT_PagFinA_validation() {

		if (!(this.not_empty('PagFinA'))) {
			this.dom.mostrar_error_campo( 'PagFinA_vacio_KO');
			return "PagFinA_vacio_KO";
		}


		if (!(this.validations.max_size( 4))) {
			this.dom.mostrar_error_campo( 'PagFinA_max_size_KO');
			return "PagFinA_max_size_KO";
		}


		if (!(this.validations.format( '^[0-9]+$'))) {
			this.dom.mostrar_error_campo( 'PagFinA_format_KO');
			return "PagFinA_format_KO";
		}

		this.dom.mostrar_exito_campo('PagFinA');
		return true;

	}

		EDIT_FechaPublicacionR_validation() {
			if (!(this.validations.min_size('FechaPublicacionR', 10))) {
				this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_min_size_KO');
				return "FechaPublicacionR_min_size_KO";
			}
	
			if (!(this.validations.max_size('FechaPublicacionR', 10))) {
				this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_max_size_KO');
				return "FechaPublicacionR_max_size_KO";
			}
	
			if (!(this.validations.format('FechaPublicacionR', '[0-9]{2,}[/][0-9]{2,}[/][0-9]{4,}'))) {
				this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_format_KO');
				return "FechaPublicacionR_format_KO";
			}
	 
			this.dom.mostrar_exito_campo('FechaPublicacionR');
			return true;
	    }
	

	EDIT_nuevo_FicheropdfA_validation() {

		if (!(this.validations.not_exist_file('nuevo_FicheropdfA'))) {
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_vacio_KO');
			return "nuevo_FicheropdfA_vacio_KO";
		}

		if (!(this.validations.max_size_file('nuevo_FicheropdfA', 20))) {
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_max_size_KO');
			return "nuevo_FicheropdfA_max_size_KO";
		}

		if (!(this.validations.type_file('nuevo_FicheropdfA', ['aplication/pdf']))) {
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_format_KO');
			return "nuevo_FicheropdfA_format_KO";
		}

		if (!(this.validations.format_name_file('nuevo_FicheropdfA', '^[A-Za-z0-9áéíóúüñçÁÉÍÓÚÜÑÇ]{1,20}\.pdf$'))) {
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_nombrePfd_format_KO');
			return "nuevo_FicheropdfA_nombrePfd_format_KO";
		}

		if (!(this.min_size_nombrePdf(5))) {
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_nombrePfd_min_size_KO');
			return "nuevo_FicheropdfA_nombrePfd_min_size_KO";
		}

		if (!(this.max_size(40))) {
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_nombrePfd_max_size_KO');
			return "nuevo_FicheropdfA_nombrePfd_max_size_KO";
		}

		this.dom.mostrar_exito_campo('nuevo_FicheropdfA');
		return true;

	}


	EDIT_submit_articulo() {

		let result = (
			
			(this.EDIT_AutoresA_validation()) &
			(this.EDIT_TituloA_validation()) &
			(this.EDIT_TituloR_validation()) &
			(this.EDIT_EstadoA_validation()) &
			(this.EDIT_ISSN_validation()) &
			(this.EDIT_VolumenR_validation()) &
			(this.EDIT_PagIniA_validation()) &
			(this.EDIT_PagFinA_validation()) &
			(this.EDIT_FechaPublicacionR_validation())&
			(this.EDIT_nuevo_FicheropdfA_validation())

		)

		result = Boolean(result);

		return result;
	}

	/* Validaciones para SEARCH */

	SEARCH_CodigoA_validation() {

		if (!(this.validations.max_size('CodigoA', 11))) {
			this.dom.mostrar_error_campo('CodigoA', 'CodigoA_max_size_KO');
			return "CodigoA_max_size_KO";
		}

		if (!(this.validations.format('CodigoA', '^[0-9]*$'))) {
			this.dom.mostrar_error_campo('CodigoA', 'CodigoA_format_KO');
			return "CodigoA_format_KO";
		}

		this.dom.mostrar_exito_campo('CodigoA');
		return true;

	}

	SEARCH_AutoresA_validation() {

		if (!(this.validations.max_size('AutoresA', 200))) {
			this.dom.mostrar_error_campo('AutoresA', 'AutoresA_max_size_KO');
			return "AutoresA_max_size_KO";
		}

		if (!(this.validations.format('AutoresA', '^[A-Za-zÁÉÍÓÚÜÑñáéíóúü ]+$'))) {
			this.dom.mostrar_error_campo('AutoresA', 'AutoresA_format_KO');
			return "AutoresA_format_KO";
		}

		this.dom.mostrar_exito_campo('AutoresA');
		return true;

	}

	SEARCH_TituloA_validation() {

		if (!(this.validations.max_size('TituloA', 100))) {
			this.dom.mostrar_error_campo('TituloA', 'tituloA_max_size_KO');
			return "tituloA_max_size_KO";
		}

		if (!(this.validations.format('TituloA', '^[A-Za-zÁÉÍÓÚÜÑñáéíóúü ]*$'))) {
			this.dom.mostrar_error_campo('TituloA', 'tituloA_format_KO');
			return "tituloA_format_KO";
		}

		this.dom.mostrar_exito_campo('TituloA');
		return true;

	}

	SEARCH_TituloR_validation() {

		if (!(this.validations.max_size('TituloR', 100))) {
			this.dom.mostrar_error_campo('TituloR', 'TituloR_max_size_KO');
			return "TituloR_max_size_KO";
		}

		if (!(this.validations.format('TituloR', '^[A-Za-zÁÉÍÓÚÜÑñáéíóúü ]*$'))) {
			this.dom.mostrar_error_campo('TituloR', 'TituloR_format_KO');
			return "TituloR_format_KO";
		}

		this.dom.mostrar_exito_campo('TituloR');
		return true;

	}
	SEARCH_EstadoA_validation() {
		const allowed = ['Enviado','Revision','Publicado']; // valores permitidos
		const id = 'EstadoA';
		const el = document.getElementById(id);
		if (!el) return true; // si no existe el campo, no validamos nada

		let values = []; // aquí guardaremos los valores a comprobar

		// 1) Obtener valores según el tipo de control
		if (el.tagName === 'SELECT' && el.multiple) {
			// Si es un select múltiple, recoger todas las opciones seleccionadas
			for (let i = 0; i < el.selectedOptions.length; i++) {
				let opcion = el.selectedOptions[i];
				let valor = opcion.value ? opcion.value.trim() : '';
				values.push(valor);
			}
		} else {
			// Si es un input de texto
			let raw = el.value ? el.value.trim() : '';
			if (raw === '') return true; // si está vacío, no pasa nada (campo opcional)

			// separar los valores por comas y limpiar espacios
			let partes = raw.split(',');
			values = [];
			for (let i = 0; i < partes.length; i++) {
				let texto = partes[i].trim();
				if (texto !== '') values.push(texto);
			}
		}

		// 2) Pasar todo a mayúsculas
		let norm = [];
		for (let i = 0; i < values.length; i++) {
			let valor = values[i].toUpperCase();
			norm.push(valor);
		}
		if (norm.length === 0) return true; // si no hay nada, se acepta

		// 3) Comprobar si todos los valores son válidos
		let valido = true;
		for (let i = 0; i < norm.length; i++) {
			let valor = norm[i];
			let permitido = false;

			// buscar si el valor está en la lista de permitidos
			for (let j = 0; j < allowed.length; j++) {
				if (valor === allowed[j]) {
					permitido = true;
					break;
				}
			}

			// si alguno no está permitido, marcar error
			if (!permitido) {
				valido = false;
				break;
			}
		}

		// 4) Mostrar resultado
		if (!valido) {
			this.dom.mostrar_error_campo(id, 'EstadoA_format_KO');
			return 'EstadoA_format_KO';
		}

		this.dom.mostrar_exito_campo(id);
		return true;
	}


	SEARCH_ISSN_validation() {

		let id = "ISSN";

		if (!this.validations.max_size(id, 9)) {
			this.dom.mostrar_error_campo(id, "ISSN_max_size_KO");
			return "ISSN_max_size_KO";
		}
		if (!this.validations.format(id, "^[0-9]+$")) {
			this.dom.mostrar_error_campo(id, "ISSN_format_KO");
			return "ISSN_format_KO";
		}
		if (!this.validacionISSN(document.getElementById(id).value)) {
			this.dom.mostrar_error_campo(id, "ISSN_valid_KO");
			return "ISSN_format_KO";
		}

		this.dom.mostrar_exito_campo(id);
		return true;

	}

	SEARCH_PagIniA_validation() {


		if (!(this.max_size(4))) {
			this.dom.mostrar_error_campo('PagIniA', 'PagIniA_max_size_KO');
			return "PagIniA_max_size_KO";
		}
		if (!(this.validations.format('PagIniA', '^[0-9]*$'))) {
			this.dom.mostrar_error_campo('PagIniA', 'PagIniA_format_KO');
			return "PagIniA_format_KO";
		}

		this.dom.mostrar_exito_campo('PagIniA');
		return true;

	}

	SEARCH_VolumenR_validation() {

		if (!(this.validations.max_size('VolumenR', 4))) {
			this.dom.mostrar_error_campo('VolumenR', 'VolumenR_max_size_KO');
			return "VolumenR_max_size_KO";
		}

		if (!(this.validations.format('VolumenR', '^[0-9]*$'))) {
			this.dom.mostrar_error_campo('VolumenR', 'VolumenR_format_KO');
			return "VolumenR_format_KO";
		}

		this.dom.mostrar_exito_campo('VolumenR');
		return true;

	}

	SEARCH_PagFinA_validation() {

		if (!(this.validations.max_size( 4))) {
			this.dom.mostrar_error_campo( 'PagFinA_max_size_KO');
			return "PagFinA_max_size_KO";
		}

		if (!(this.validations.format( '^[0-9]*$'))) {
			this.dom.mostrar_error_campo( 'PagFinA_format_KO');
			return "PagFinA_format_KO";
		}

		this.dom.mostrar_exito_campo('PagFinA');
		return true;

	}

	SEARCH_FechaPublicacionR_validacion(valor) {
		if (!valor) return true; // Se permite vacío en búsqueda
	
		const formatoFecha = /^\d{4}-\d{2}-\d{2}$/;
		if (!formatoFecha.test(valor)) return false;
	
		// Comprobamos que la fecha sea válida
		const [anio, mes, dia] = valor.split('-').map(Number);
		const fecha = new Date(anio, mes - 1, dia);
		return fecha.getFullYear() === anio && fecha.getMonth() === mes - 1 && fecha.getDate() === dia;
	}

	SEARCH_FicheroPdfA_validation() {

		if (!(this.validations.format( '^[A-Za-z0-9áéíóúüñçÁÉÍÓÚÜÑÇ]{1,20}\.pdf$'))) {
			this.dom.mostrar_error_campo( 'FicheroPdfA_nombrePfd_format_KO');
			return "FicheroPdfA_nombrePfd_format_KO";
		}

		if (!(this.validations.max_size( 40))) {
			this.dom.mostrar_error_campo( 'FicheroPdfA_nombrePfd_max_size_KO');
			return "FicheroPdfA_nombrePfd_max_size_KO";
		}

		this.dom.mostrar_exito_campo('FicheroPdfA' );
		return true;
	}


	SEARCH_submit_articulo() {

		let result = (
			(this.SEARCH_CodigoA_validation()) &
			(this.SEARCH_AutoresA_validation()) &
			(this.SEARCH_TituloA_validation()) &
			(this.SEARCH_TituloR_validation()) &
			(this.SEARCH_EstadoA_validation()) &
			(this.SEARCH_ISSN_validation()) &
			(this.SEARCH_VolumenR_validation()) &
			(this.SEARCH_PagIniA_validation()) &
			(this.SEARCH_PagFinA_validation()) &
			(this.SEARCH_FechaPublicacionR_validacion())&
			(this.SEARCH_FicheroPdfA_validation())

		)

		result = Boolean(result);

		return result;

	}

    
	validacionISSN(valor) {
		if (valor == null) return false;
	
		// 1. Normalizar: quitar espacios y pasar a mayúsculas
		let v = String(valor).toUpperCase().trim();
	
		// 2. Comprobar formato general: 4 dígitos, guion, 3 dígitos y un dígito o X
		const reISSN = /^\d{4}-\d{3}[\dX]$/;
		if (!reISSN.test(v)) return false;
	
		// 3. Quitar el guion para calcular el dígito de control
		let sinGuion = v.replace('-', '');
		let numeros = sinGuion.slice(0, 7);  // primeros 7 dígitos
		let control = sinGuion[7];           // último carácter (puede ser X)
	
		// 4. Calcular el dígito de control teórico
		//    Fórmula ISSN: (8×n1 + 7×n2 + 6×n3 + 5×n4 + 4×n5 + 3×n6 + 2×n7) mod 11
		//    Dígito de control = 11 - (resultado)
		//    Si da 10 → X, si da 11 → 0
		let suma = 0;
		for (let i = 0; i < 7; i++) {
			suma += parseInt(numeros[i], 10) * (8 - i);
		}
	
		let resto = suma % 11;
		let digitoCalculado = 11 - resto;
		if (digitoCalculado === 10) digitoCalculado = 'X';
		else if (digitoCalculado === 11) digitoCalculado = '0';
		else digitoCalculado = String(digitoCalculado);
	
		// 5. Comparar el dígito real con el calculado
		return control === digitoCalculado;
	}
	


	createForm_EDIT(fila) {

        // limpiar poner titulo y poner visible el formulario
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');

        this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
        this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_EDIT');

        // rellenar onsubmit y action
        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.EDIT_submit_' + this.nombreentidad);
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.EDIT();');

        //activar el link al fichero

        this.dom.assign_property_value('link_FicheropdfA', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_FicheropdfA/' + fila.FicheropdfA);

        // rellenar valores
        this.dom.rellenarvaloresform(fila);

        // poner las validaciones
        this.dom.colocarvalidaciones('form_iu', 'EDIT');

        // poner inactivos los campos correspondientes
        this.dom.assign_property_value('CodigoA', 'readonly', 'true');

        this.dom.assign_property_value('link_FicheropdfA', 'readonly', 'true');

        // colocar boton de submit
        this.dom.colocarboton('EDIT');
        document.getElementById('FechaPublicacionR').value = this.isoToDDMMYYYY(document.getElementById('FechaPublicacionR').value);

        setLang();

    }

    createForm_DELETE(fila) {

        // limpiar y poner visible el formulario
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
        this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_DELETE');

        // rellenar y action
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');

        this.dom.hide_element_form('nuevo_FicheropdfA');
        this.dom.assign_property_value('link_FicheropdfA', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_FicheropdfA/' + fila.FicheropdfA);

        // rellenar valores
        this.dom.rellenarvaloresform(fila);
        document.getElementById('FechaPublicacionR').value = this.isoToDDMMYYYY(document.getElementById('FechaPublicacionR').value);


        // poner inactivos los campos correspondientes
        this.dom.colocartodosreadonly('form_iu');

        // colocar boton de submit
        this.dom.colocarboton('DELETE');

        setLang();
    }

    createForm_SHOWCURRENT(fila) {
        // limpiar y poner visible el formulario
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
        this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_SHOWCURRENT');

        // rellenar y action
        //this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');

        this.dom.hide_element_form('nuevo_FicheropdfA');
        this.dom.assign_property_value('link_FicheropdfA', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_FicheropdfA/' + fila.FicheropdfA);



        // rellenar valores
        this.dom.rellenarvaloresform(fila);
        document.getElementById('FechaPublicacionR').value = this.isoToDDMMYYYY(document.getElementById('FechaPublicacionR').value);

        // poner inactivos los campos correspondientes
        this.dom.colocartodosreadonly('form_iu');

        // colocar boton de submit
        //this.colocarboton('SHOWCURRENT');

        setLang();

    }

    createForm_ADD() {

        // poner titulo al formulario

        // limpiar y poner visible el formulario
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
        this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_ADD');

        // poner onsubmit
        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.ADD_submit_' + this.nombreentidad + '()');

        // poner action
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.ADD();');

        this.dom.hide_element_form('FicheropdfA');
        this.dom.hide_element('link_FicheropdfA');
        this.dom.hide_element('CodigoA');

        // rellenar valores
        // en ADD no hay valores que rellenar

        // poner las validaciones
        this.dom.colocarvalidaciones('form_iu', 'ADD');

        // poner inactivos los campos correspondientes
        // en ADD no hay inactivos... si hubiese un autoincremental ya no se mostraria

        // colocar boton de submit
        this.dom.colocarboton('ADD');

        setLang();
    }

    createForm_SEARCH() {

        // poner titulo al formulario

        // limpiar y poner visible el formulario
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
        this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_SEARCH');

        // poner onsubmit
        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.SEARCH_submit_' + this.nombreentidad);

        // poner action
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.SEARCH();');

        this.dom.hide_element_form('nuevo_FicheropdfA');
        this.dom.hide_element('link_FicheropdfA');




        // rellenar valores
        // en SEARCH no hay valores que rellenar

        // poner las validaciones
        this.dom.colocarvalidaciones('form_iu', 'SEARCH');

        // colocar boton de submit
        this.dom.colocarboton('SEARCH');

        setLang();

    }

	/**
	 * modifica el formato de visualización de un atributo concreto y se devuelve el valor modificado
	 * en el caso de solicitar cambio de formato para un atributo no implementado se lanza una alerta
	 * 
	 * @param {String} atributo string con el nombre del atributo a modificar su valor
	 * @param {String} valorentrada string con el valor de entrada a modificar
	 * @returns 
	 */
	
	mostrarcambioatributo(atributo, valoratributo) {
        if (atributo === 'FicheropdfA') {
            if (!valoratributo) return `<a class="no_file_found"></a>`;

            const id = `link_FicheropdfA_${valoratributo}`;
            const url = `http://193.147.87.202/ET2/filesuploaded/files_FicheropdfA/${valoratributo}`;

            return `
			<a id="${id}" href="${url}" target="_blank">
				<img src="./iconos/FILE.png" alt="Archivo" />
			</a>
		`;
        }
        if (atributo === 'FechaPublicacionR') {
            return this.isoToDDMMYYYY(valoratributo);
        }

        // Si no es el atributo esperado, devolver el valor tal cual
        return valoratributo;
    }

	
	

	min_size_nombrePdf(minsize) {
		let objfile = document.getElementById("nuevo_FicheropdfA");
		
		// Comprobamos que haya un archivo seleccionado
		if (!objfile || !objfile.files || objfile.files.length === 0) {
			return false;
		}
	
		// Tomamos el nombre del archivo
		let valor = objfile.files[0].name;
	
		// Eliminamos los espacios al inicio y final por si acaso
		valor = valor.trim();
	
		// Comprobamos que termina en .pdf (ignorando mayúsculas)
		if (!valor.toLowerCase().endsWith(".pdf")) {
			return false;
		}
	
		// Obtenemos solo el nombre antes de ".pdf"
		let nombreSinExtension = valor.slice(0, -4);
	
		// Si hay un punto dentro del nombre, no es válido (por ejemplo: art.iculo.pdf)
		if (nombreSinExtension.includes(".")) {
			return false;
		}
	
		// Comprobamos que el nombre (sin extensión) tenga al menos 'minsize' caracteres
		if (nombreSinExtension.length < minsize) {
			return false;
		}
	
		return true;
	}

	not_empty(nombre) {
		let objfile = document.getElementById(nombre).value;

		if (objfile) {
			return true;
		}
		else {
			return false;
		}

	}

	fechaNoSuperiorActual(valor) {
		if (!valor) return false;
	
		const fecha = new Date(valor);
		const hoy = new Date();
	
		// Poner horas a 00:00 para comparar solo fecha
		fecha.setHours(0, 0, 0, 0);
		hoy.setHours(0, 0, 0, 0);
	
		return fecha <= hoy;
	}

	isoToDDMMYYYY(valor) {
		// Si el valor es nulo, vacío o no es string, devolvemos cadena vacía
		if (!valor || typeof valor !== 'string') return '';
	
		// Comprobamos que cumpla el formato ISO correcto
		const reISO = /^\d{4}-\d{2}-\d{2}$/;
		if (!reISO.test(valor)) return '';
	
		// Dividimos en partes
		const [year, month, day] = valor.split('-');
	
		// Validamos que la fecha sea válida (por ejemplo 2025-02-30 no lo es)
		const fecha = new Date(`${year}-${month}-${day}`);
		if (
			fecha.getFullYear() != parseInt(year) ||
			fecha.getMonth() + 1 != parseInt(month) ||
			fecha.getDate() != parseInt(day)
		) {
			return '';
		}
	
		// Formateamos con ceros si hace falta
		const dia = day.padStart(2, '0');
		const mes = month.padStart(2, '0');
	
		return `${dia}/${mes}/${year}`;
	}
	
}