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
	
				<label class="label_PagIniA">  </label>
				<input type='text' id='PagIniA' name='PagIniA' ></input>
				<span id="span_error_PagIniA"><a id="error_PagIniA"></a></span>
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
			this.dom.mostrar_error_campo('TituloA', 'TituloA_vacio_KO');
			return "TituloA_vacio_KO";
		}

		if (!(this.validations.min_size('TituloA', 2))) {
			this.dom.mostrar_error_campo('TituloA', 'TituloA_min_size_KO');
			return "TituloA_min_size_KO";
		}

		if (!(this.validations.max_size('TituloA', 100))) {
			this.dom.mostrar_error_campo('TituloA', 'TituloA_max_size_KO');
			return "TituloA_max_size_KO";
		}

		if (!(this.validations.format('TituloA', '^[A-Za-zÁÉÍÓÚÜÑñáéíóúü ]+$'))) {
			this.dom.mostrar_error_campo('TituloA', 'TituloA_format_KO');
			return "TituloA_format_KO";
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

		if (!this.validations.max_size(id, 9)) {
			this.dom.mostrar_error_campo(id, "ISSN_max_size_KO");
			return "ISSN_max_size_KO";
		}
		if (!this.validations.format(id, "^[0-9]{4}-[0-9]{3}[0-9X]$")) {
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
	
			if (!(this.max_size_int('PagIniA',4))) {
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
			this.dom.mostrar_error_campo( 'PagFinA','PagFinA_vacio_KO');
			return "PagFinA_vacio_KO";
		}


		if (!(this.max_size_int ('PagFinA', 4))) {
			this.dom.mostrar_error_campo( 'PagFinA' ,'PagFinA_max_size_KO');
			return "PagFinA_max_size_KO";
		}

		if (!(this.validations.format( 'PagFinA','^[0-9]$'))) {
			this.dom.mostrar_error_campo( 'PagFinA' ,'PagFinA_max_size_KO');
			return "PagFinA_format_KO";
		}

		this.dom.mostrar_exito_campo('PagFinA');
		return true;

	}

	// AAD fechapublicacion
	ADD_FechaPublicacionR_validation() {

		const valor = document.getElementById('FechaPublicacionR').value.trim();
	
		// Validar campo vacío
		if (valor === '') {
			this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_vacio_KO');
			return "FechaPublicacionR_vacio_KO";
		}
	
		// Validar tamaño mínimo
		if (!(this.validations.min_size('FechaPublicacionR', 10))) {
			this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_min_size_KO');
			return "FechaPublicacionR_min_size_KO";
		}
	
		// Validar tamaño máximo
		if (!(this.validations.max_size('FechaPublicacionR', 10))) {
			this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_max_size_KO');
			return "FechaPublicacionR_max_size_KO";
		}
	
		// Validar formato (dd/mm/yyyy)
		if (!(this.validations.format('FechaPublicacionR', '^[0-9]{2}/[0-9]{2}/[0-9]{4}$'))) {
			this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_format_KO');
			return "FechaPublicacionR_format_KO";
		}

		if(!(this.fechaNoSuperiorActual( 'FechaPublicacionR'))){
			this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_superiorActual_KO');
			return "FechaPublicacionR_superiorActual_KO";
		}
		//validar fecha actual
	
		// Todo correcto
		this.dom.mostrar_exito_campo('FechaPublicacionR');
		return true;
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
		const valor = document.getElementById('FicheropdfA').value;

		const regex = /^[A-Za-z0-9áéíóúüñçÁÉÍÓÚÜÑÇ]+\\.pdf$/;
		if (!regex.test(valor)) {
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_nombrepdf_format_KO');
			return "nuevo_FicheropdfA_nombrepdf_format_KO";
		}

		if (!(this.min_size_nombrepdf(5))) {
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_TituloAfoto_min_size_KO');
			return "nuevo_FicheropdfA_nombrepdf_min_size_KO";
		}

		if (!(this.max_size_nombrepdf(20))) {
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_nombrepdf_max_size_KO');
			return "nuevo_FicheropdfA_nombrepdf_max_size_KO";
		}

		if (!(this.validations.type_file('nuevo_FicheropdfA', ['application/pdf']))) {
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_format_KO');
			return "nuevo_FicheropdfA_format_KO";
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
			this.dom.mostrar_error_campo('TituloA', 'TituloA_vacio_KO');
			return "TituloA_vacio_KO";
		}

		if (!(this.validations.min_size('TituloA', 2))) {
			this.dom.mostrar_error_campo('TituloA', 'TituloA_min_size_KO');
			return "TituloA_min_size_KO";
		}

		if (!(this.validations.max_size('TituloA', 100))) {
			this.dom.mostrar_error_campo('TituloA', 'TituloA_max_size_KO');
			return "TituloA_max_size_KO";
		}

		if (!(this.validations.format('TituloA', '^[A-Za-zÁÉÍÓÚÜÑñáéíóúü ]+$'))) {
			this.dom.mostrar_error_campo('TituloA', 'TituloA_format_KO');
			return "TituloA_format_KO";
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

		if (!(this.max_size_int('PagIniA',4))) {
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
			this.dom.mostrar_error_campo( 'PagFinA','PagFinA_vacio_KO');
			return "PagFinA_vacio_KO";
		}


		if (!(this.max_size_int( 'PagFinA', 4))) {
			this.dom.mostrar_error_campo( 'PagFinA','PagFinA_max_size_KO');
			return "PagFinA_max_size_KO";
		}


		if (!(this.validations.format( 'PagFinA', '^[0-9]+$'))) {
			this.dom.mostrar_error_campo( 'PagFinA' ,'PagFinA_max_size_KO');
			return "PagFinA_format_KO";
		}

		this.dom.mostrar_exito_campo('PagFinA');
		return true;

	}

		EDIT_FechaPublicacionR_validation() {
			const valor = document.getElementById('FechaPublicacionR').value.trim();
	
		// Validar campo vacío
		if (valor === '') {
			this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_vacio_KO');
			return "FechaPublicacionR_vacio_KO";
		}
	
		// Validar tamaño mínimo
		if (!(this.validations.min_size('FechaPublicacionR', 10))) {
			this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_min_size_KO');
			return "FechaPublicacionR_min_size_KO";
		}
	
		// Validar tamaño máximo
		if (!(this.validations.max_size('FechaPublicacionR', 10))) {
			this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_max_size_KO');
			return "FechaPublicacionR_max_size_KO";
		}
	
		// Validar formato (dd/mm/yyyy)
		if (!(this.validations.format('FechaPublicacionR', '^[0-9]{2}/[0-9]{2}/[0-9]{4}$'))) {
			this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_format_KO');
			return "FechaPublicacionR_format_KO";
		}

		if(!(this.fechaNoSuperiorActual( 'FechaPublicacionR'))){
			this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_superiorActual_KO');
			return "FechaPublicacionR_superiorActual_KO";
		}
	
		// Todo correcto
		this.dom.mostrar_exito_campo('FechaPublicacionR');
		return true;
	}

	EDIT_nuevo_FicheropdfA_validation() {

		if (!(this.validations.not_exist_file('nuevo_FicheropdfA'))) {
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_vacio_KO');
			return "nuevo_FicheropdfA_vacio_KO";
		}

		if (!(this.validations.max_size_file('nuevo_FicheropdfA', 20000000))) {
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_max_size_KO');
			return "nuevo_FicheropdfA_max_size_KO";
		}

		if (!(this.validations.type_file('nuevo_FicheropdfA', ['application/pdf']))) {
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_format_KO');
			return "nuevo_FicheropdfA_format_KO";
		}
		if (!(this.min_size_nombrepdf(5))) {
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_nombrepdf_min_size_KO');
			return "nuevo_FicheropdfA_nombrepdf_min_size_KO";
		}

		if (!(this.max_size_nombrepdf(21))) {
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_nombrepdf_max_size_KO');
			return "nuevo_FicheropdfA_nombrepdf_max_size_KO";
		}

		const valor = document.getElementById('FicheropdfA').value;

		const regex = /^[A-Za-z0-9áéíóúüñçÁÉÍÓÚÜÇ]+\\.pdf$/;
		if (!regex.test(valor)) {
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_nombrepdf_format_KO');
			return "nuevo_FicheropdfA_nombrepdf_format_KO";
		}
		

		this.dom.mostrar_exito_campo('nuevo_FicheropdfA');
		return true;

	}


	EDIT_submit_articulo() {

		let result = (
			(this.EDIT_CodigoA_validation())&
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

		
		if (!(this.validations.format('CodigoA', '^[0-9]*$'))) {
			this.dom.mostrar_error_campo('CodigoA', 'CodigoA_format_KO');
			return "CodigoA_format_KO";
		}

		if (!(this.max_size_int('CodigoA', 11))) {
			this.dom.mostrar_error_campo('CodigoA', 'CodigoA_max_size_KO');
			return "CodigoA_max_size_KO";
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
			this.dom.mostrar_error_campo('TituloA', 'TituloA_max_size_KO');
			return "TituloA_max_size_KO";
		}

		if (!(this.validations.format('TituloA', '^[A-Za-zÁÉÍÓÚÜÑñáéíóúü ]*$'))) {
			this.dom.mostrar_error_campo('TituloA', 'TituloA_format_KO');
			return "TituloA_format_KO";
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
	
		// pre-normalizar lista permitida a mayúsculas para comparación case-insensitive
		const allowedUpper = allowed.map(a => String(a).toUpperCase());
	
		let values = []; // valores a comprobar
	
		// Si es select múltiple recoger selectedOptions
		if (el.tagName === 'SELECT' && el.multiple) {
			values = Array.from(el.selectedOptions).map(o => (o.value || '').trim()).filter(v => v !== '');
		} else {
			// para input/textarea o select simple usamos el value
			let raw = (el.value || '').trim();
			if (raw === '') return true; // vacío permitido en búsqueda
	
			// permitir entradas separadas por comas (p. ej. "Enviado,Publicado")
			values = raw.split(',').map(s => s.trim()).filter(v => v !== '');
		}
	
		// Normalizar valores a mayúsculas y comprobar
		for (let v of values) {
			const up = v.toUpperCase();
			if (!allowedUpper.includes(up)) {
				this.dom.mostrar_error_campo(id, 'EstadoA_format_KO');
				return 'EstadoA_format_KO';
			}
		}
	
		// Si llegamos aquí, todos los valores son válidos
		this.dom.mostrar_exito_campo(id);
		return true;
	}
	

	SEARCH_ISSN_validation() {

		let id = "ISSN";

		if (!this.validations.max_size(id, 9)) {
			this.dom.mostrar_error_campo(id, "ISSN_max_size_KO");
			return "ISSN_max_size_KO";
		}
		if (!this.validations.format(id, "^[0-9A-Z-]*$")) {
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


		if (!(this.max_size_int('PagIniA',4))) {
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

		if (!(this.max_size_int( 'PagFinA', 4))) {
			this.dom.mostrar_error_campo( 'PagFinA','PagFinA_max_size_KO');
			return "PagFinA_max_size_KO";
		}

		if (!(this.validations.format( 'PagFinA','^[0-9]*$'))) {
			this.dom.mostrar_error_campo('PagFinA','PagFinA_format_KO');
			return "PagFinA_format_KO";
		}

		this.dom.mostrar_exito_campo('PagFinA');
		return true;

	}

	SEARCH_FechaPublicacionR_validation(valor) {
		if (!valor) return true; // Se permite vacío en búsqueda
	
		const formatoFecha = /^[0-9/]*$/;
		if (!formatoFecha.test(valor)) return false;
	
		// Comprobamos que la fecha sea válida
		const [anio, mes, dia] = valor.split('-').map(Number);
		const fecha = new Date(anio, mes - 1, dia);
		return fecha.getFullYear() === anio && fecha.getMonth() === mes - 1 && fecha.getDate() === dia;
	}

	SEARCH_FicheropdfA_validation() {

		const valor = document.getElementById('FicheropdfA').value;
		if (!(this.max_size_nombrepdf( 40))) {
			this.dom.mostrar_error_campo('FicheropdfA', 'FicheropdfA_nombrepdf_max_size_KO');
			return "FicheropdfA_nombrepdf_max_size_KO";
		}
	
		// Validación de formato del nombre del PDF
		const regex = /^[A-Za-z0-9áéíóúüñçÁÉÍÓÚÜÑÇ]+\.pdf$/;
		if (!regex.test(valor)) {
			this.dom.mostrar_error_campo('FicheropdfA', 'FicheropdfA_nombrepdf_format_KO');
			return "FicheropdfA_nombrepdf_format_KO";
		}
	
		// Validación de tamaño máximo del nombre
		
		this.dom.mostrar_exito_campo('FicheropdfA');
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
			(this.SEARCH_FechaPublicacionR_validation())&
			(this.SEARCH_FicheropdfA_validation())

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

        // limpiar poner Titulo y poner visible el formulario
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');

        this.dom.remove_class_value('class_contenido_Titulo_form', 'text_contenido_Titulo_form');
        this.dom.assign_class_value('class_contenido_Titulo_form', 'text_contenido_Titulo_form_EDIT');

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
        this.dom.remove_class_value('class_contenido_Titulo_form', 'text_contenido_Titulo_form');
        this.dom.assign_class_value('class_contenido_Titulo_form', 'text_contenido_Titulo_form_DELETE');

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
        this.dom.remove_class_value('class_contenido_Titulo_form', 'text_contenido_Titulo_form');
        this.dom.assign_class_value('class_contenido_Titulo_form', 'text_contenido_Titulo_form_SHOWCURRENT');

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

        // poner Titulo al formulario

        // limpiar y poner visible el formulario
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_Titulo_form', 'text_contenido_Titulo_form');
        this.dom.assign_class_value('class_contenido_Titulo_form', 'text_contenido_Titulo_form_ADD');

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

        // poner Titulo al formulario

        // limpiar y poner visible el formulario
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_Titulo_form', 'text_contenido_Titulo_form');
        this.dom.assign_class_value('class_contenido_Titulo_form', 'text_contenido_Titulo_form_SEARCH');

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

	
	
	min_size_nombrepdf(nombreCampo, minsize) {
		const objfile = document.getElementById(nombreCampo);
		if (!objfile || !objfile.files || objfile.files.length === 0) return false;
	
		const valor = objfile.files[0].name.trim().toLowerCase();
		if (!valor.endsWith(".pdf")) return false;
	
		const nombreSinExtension = valor.slice(0, -4);
	
		// Comprobamos longitud mínima
		return nombreSinExtension.length >= minsize;
	}
	
	max_size_nombrepdf(nombreCampo, maxsize) {
		const objfile = document.getElementById(nombreCampo);
		if (!objfile || !objfile.files || objfile.files.length === 0) return false;
	
		const valor = objfile.files[0].name.trim().toLowerCase();
		if (!valor.endsWith(".pdf")) return false;
	
		const nombreSinExtension = valor.slice(0, -4);
	
		// Comprobamos longitud máxima
		return nombreSinExtension.length <= maxsize;
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
	fechaNoSuperiorActual(nombreCampo) {
		const valor = document.getElementById(nombreCampo)?.value.trim();
		if (!valor) return false;
	
		let dia, mes, anio;
	
		// Detectar formato español dd/mm/yyyy
		if (/^\d{2}\/\d{2}\/\d{4}$/.test(valor)) {
			[dia, mes, anio] = valor.split('/');
		}
		// Detectar formato ISO yyyy-mm-dd
		else if (/^\d{4}-\d{2}-\d{2}$/.test(valor)) {
			[anio, mes, dia] = valor.split('-');
		}
		else {
			return false; // formato no válido
		}
	
		const fecha = new Date(`${anio}-${mes}-${dia}`);
		if (isNaN(fecha)) return false;
	
		const hoy = new Date();
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
	 
	
	max_size_int(nombreCampo, maximo) {
		// Obtiene el valor del campo por su id
		let valor = document.getElementById(nombreCampo)?.value;
	
		// Verifica que exista el campo y que tenga un valor numérico válido
		if (valor === undefined || valor === null || valor.trim() === '' || isNaN(valor)) {
			return false;
		}
	
		// Convierte a número entero
		valor = parseInt(valor, 10);
	
		// Devuelve true si el número tiene como máximo 'maximo' dígitos
		return valor.toString().length <= maximo;
	}
}