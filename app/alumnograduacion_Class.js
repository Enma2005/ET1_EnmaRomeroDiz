class alumnograduacion extends EntidadAbstracta {

	constructor(esTest) {

		super();
		this.columnasamostrar = ['alumnograduacion_dni', 'alumnograduacion_nombre', 'alumnograduacion_fotoacto'];
		this.mostrarespecial = ['alumnograduacion_fotoacto'];
		this.nombreentidad = 'alumnograduacion';

		// definicion de los atributos del formulario (Necesario para test de unidad)
		this.attributes = [
			'alumnograduacion_login',
			'alumnograduacion_password',
			'alumnograduacion_nombre',
			'alumnograduacion_apellidos',
			'alumnograduacion_titulacion',
			'alumnograduacion_dni',
			'alumnograduacion_telefono',
			'alumnograduacion_email',
			'alumnograduacion_fotoacto',
			'nuevo_alumnograduacion_fotoacto',
		];




	}

	/**
	 * replace the content of section element with a particular entity menu
	 * @returns 
	 */
	manual_form_creation() {
		var form_content = `
			<form id = 'form_iu'  action="http://193.147.87.202/procesaform.php" method="POST" enctype="multipart/form-data" >

			
			<label class="label_alumnograduacion_login">Login</label>
			<input type='text' id='alumnograduacion_login' name='alumnograduacion_login' ></input>
			<span id="span_error_alumnograduacion_login" ><a id="error_alumnograduacion_login"></a></span>
			<br>

			<label class="label_alumnograduacion_password">Password</label>
			<input type='text' id='alumnograduacion_password' name='alumnograduacion_password' ></input>
			<span id="span_error_alumnograduacion_password" ><a id="error_alumnograduacion_password"></a></span>
			<br>
			
			<label class="label_alumnograduacion_nombre">Nombre</label>
			<input type='text' id='alumnograduacion_nombre' name='alumnograduacion_nombre' ></input>
			<span id="span_error_alumnograduacion_nombre" ><a id="error_alumnograduacion_nombre"></a></span>
			<br>
			
			<label class="label_alumnograduacion_apellidos">Apellidos</label>
			<input type='text' id='alumnograduacion_apellidos' name='alumnograduacion_apellidos'></input>
			<span id="span_error_alumnograduacion_apellidos" ><a id="error_alumnograduacion_apellidos"></a></span>
			<br>

			<label class="label_alumnograduacion_titulacion">Titulación</label>
			<select id="alumnograduacion_titulacion" name="alumnograduacion_titulacion" required>
  				<option value="">-- Selecciona tu titulación --</option>
  				<option value="GREI">GREI</option>
  				<option value="GRIA">GRIA</option>
  				<option value="MEI">MEI</option>
  				<option value="MIA">MIA</option>
  				<option value="PCEO">PCEO</option>
			</select>
			<span id="span_error_alumnograduacion_titulacion"><a id="error_alumnograduacion_titulacion"></a></span>
			<br>
			
			<label class="label_alumnograduacion_dni">DNI</label>
			<input type='text' id='alumnograduacion_dni' name='alumnograduacion_dni' ></input>
			<span id="span_error_alumnograduacion_dni"><a id="error_alumnograduacion_dni"></a></span>
			<br>
			
			<label class="label_alumnograduacion_telefono">Teléfono</label>
			<input type='text' id='alumnograduacion_telefono' name='alumnograduacion_telefono'></input>
			<span id="span_error_alumnograduacion_telefono" ><a id="error_alumnograduacion_telefono"></a></span>
			<br>

			<label class="label_alumnograduacion_direccion">Dirección</label>
			<textarea rows="5" cols="33" type='text' id='alumnograduacion_direccion' name='alumnograduacion_direccion'></textarea>
			<span id="span_error_alumnograduacion_direccion" ><a id="error_alumnograduacion_direccion"></a></span>
			<br>

			<label class="label_alumnograduacion_email">Correo Electrónico</label>
			<input type='text' id='alumnograduacion_email' name='alumnograduacion_email'></input>
			<span id="span_error_alumnograduacion_email" ><a id="error_alumnograduacion_email"></a></span>

			<br>
			<label id="label_alumnograduacion_fotoacto" class="label_alumnograduacion_fotoacto">Foto Acto</label>
			<input type='text' id='alumnograduacion_fotoacto' name='alumnograduacion_fotoacto'></input>
			<span id="span_error_alumnograduacion_fotoacto"><a id="error_alumnograduacion_fotoacto"></a></span>
			<a id="link_alumnograduacion_fotoacto" href="http://193.147.87.202/ET2/filesuploaded/files_alumnograduacion_fotoacto/"><img src="./iconos/FILE.png" /></a>
			
			<label id="label_nuevo_alumnograduacion_fotoacto" class="label_nuevo_alumnograduacion_fotoacto">Nueva Foto Acto</label>
			<input type='file' id='nuevo_alumnograduacion_fotoacto' name='nuevo_alumnograduacion_fotoacto'></input>
			<span id="span_error_nuevo_alumnograduacion_fotoacto"><a id="error_nuevo_alumnograduacion_fotoacto"></a></span>
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

	ADD_alumnograduacion_login_validation() {

		if (!(this.not_empty('alumnograduacion_login'))) {
			this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_vacio_KO');
			return "alumnograduacion_login_vacio_KO";
		}
		if (!(this.validations.min_size('alumnograduacion_login', 4))) {
			this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_min_size_KO');
			return "alumnograduacion_login_min_size_KO";
		}

		if (!(this.validations.max_size('alumnograduacion_login', 15))) {
			this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_max_size_KO');
			return "alumnograduacion_login_max_size_KO";
		}

		if (!(this.validations.format('alumnograduacion_login', '^[A-Za-z]+$'))) {
			this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_format_KO');
			return "alumnograduacion_login_format_KO";
		}

		this.dom.mostrar_exito_campo('alumnograduacion_login');
		return true;

	}

	ADD_alumnograduacion_password_validation() {
		if (!(this.not_empty('alumnograduacion_password'))) {
			this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_vacio_KO');
			return "alumnograduacion_password_vacio_KO";
		}

		if (!(this.validations.min_size('alumnograduacion_password', 8))) {
			this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_min_size_KO');
			return "alumnograduacion_password_min_size_KO";
		}

		if (!(this.validations.max_size('alumnograduacion_password', 64))) {
			this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_max_size_KO');
			return "alumnograduacion_password_max_size_KO";
		}

		if (!(this.validations.format('alumnograduacion_password', '^[A-Za-z ]+$'))) {
			this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_format_KO');
			return "alumnograduacion_password_format_KO";
		}

		this.dom.mostrar_exito_campo('alumnograduacion_password');
		return true;

	}

	ADD_alumnograduacion_nombre_validation() {
		if (!(this.not_empty('alumnograduacion_nombre'))) {
			this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_vacio_KO');
			return "alumnograduacion_nombre_vacio_KO";
		}

		if (!(this.validations.min_size('alumnograduacion_nombre', 2))) {
			this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_min_size_KO');
			return "alumnograduacion_nombre_min_size_KO";
		}

		if (!(this.validations.max_size('alumnograduacion_nombre', 25))) {
			this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_max_size_KO');
			return "alumnograduacion_nombre_max_size_KO";
		}

		if (!(this.validations.format('alumnograduacion_nombre', '^[A-Za-zÁÉÍÓÚÜÑñáéíóúü ]+$'))) {
			this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_format_KO');
			return "alumnograduacion_nombre_format_KO";
		}

		this.dom.mostrar_exito_campo('alumnograduacion_nombre');
		return true;

	}

	ADD_alumnograduacion_apellidos_validation() {

		if (!(this.not_empty('alumnograduacion_apellidos'))) {
			this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_vacio_KO');
			return "alumnograduacion_apellidos_vacio_KO";
		}

		if (!(this.validations.min_size('alumnograduacion_apellidos', 2))) {
			this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_min_size_KO');
			return "alumnograduacion_apellidos_min_size_KO";
		}

		if (!(this.validations.max_size('alumnograduacion_apellidos', 35))) {
			this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_max_size_KO');
			return "alumnograduacion_apellidos_max_size_KO";
		}

		if (!(this.validations.format('alumnograduacion_apellidos', '^[A-Za-zÁÉÍÓÚÜÑñáéíóúü ]+$'))) {
			this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_format_KO');
			return "alumnograduacion_apellidos_format_KO";
		}

		this.dom.mostrar_exito_campo('alumnograduacion_apellidos');
		return true;

	}

	ADD_alumnograduacion_titulacion_validation() {

		const allowed = ['GREI', 'GRIA', 'MEI', 'MIA', 'PCEO'];
		const el = document.getElementById('alumnograduacion_titulacion');
		const value = el ? el.value : '';

		if (!value) {
			this.dom.mostrar_error_campo('alumnograduacion_titulacion', 'alumnograduacion_titulacion_vacio_KO');
			return 'alumnograduacion_titulacion_vacio_KO';
		}

		if (!allowed.includes(value)) {
			this.dom.mostrar_error_campo('alumnograduacion_titulacion', 'alumnograduacion_titulacion_format_KO');
			return 'alumnograduacion_titulacion_format_KO';
		}

		this.dom.mostrar_exito_campo('alumnograduacion_titulacion');
		return true;

	}

	ADD_alumnograduacion_dni_validation() {

		let id = "alumnograduacion_dni";
		if (!(this.not_empty('alumnograduacion_dni'))) {
			this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_dni_vacio_KO');
			return "alumnograduacion_dni_vacio_KO";
		}

		if (!this.validations.min_size(id, 9)) {
			this.dom.mostrar_error_campo(id, "alumnograduacion_dni_min_size_KO");
			return "alumnograduacion_dni_min_size_KO";
		}
		if (!this.validations.max_size(id, 9)) {
			this.dom.mostrar_error_campo(id, "alumnograduacion_dni_max_size_KO");
			return "alumnograduacion_dni_max_size_KO";
		}
		if (!this.validations.format(id, "^[0-9]{8}[A-Z]$")) {
			this.dom.mostrar_error_campo(id, "alumnograduacion_dni_format_KO");
			return "alumnograduacion_dni_format_KO";
		}
		if (!this.validDNIoNIE(document.getElementById(id).value)) {
			this.dom.mostrar_error_campo(id, "alumnograduacion_dni_format_KO");
			return "alumnograduacion_dni_format_KO";
		}

		this.dom.mostrar_exito_campo(id);
		return true;
	}

	ADD_alumnograduacion_telefono_validation() {

		if (!(this.not_empty('alumnograduacion_telefono'))) {
			this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_vacio_KO');
			return "alumnograduacion_telefono_vacio_KO";
		}

		if (!(this.validations.min_size('alumnograduacion_telefono', 9))) {
			this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_min_size_KO');
			return "alumnograduacion_telefono_min_size_KO";
		}

		if (!(this.validations.max_size('alumnograduacion_telefono', 9))) {
			this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_max_size_KO');
			return "alumnograduacion_telefono_max_size_KO";
		}

		if (!(this.validations.format('alumnograduacion_telefono', '^[0-9]+$'))) {
			this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_format_KO');
			return "alumnograduacion_telefono_format_KO";
		}

		this.dom.mostrar_exito_campo('alumnograduacion_telefono');
		return true;

	}

	ADD_alumnograduacion_direccion_validation() {

		if (!(this.not_empty('alumnograduacion_direccion'))) {
			this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_vacio_KO');
			return "alumnograduacion_direccion_vacio_KO";
		}

		if (!(this.min_sizeDireccion(5))) {
			this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_min_size_KO');
			return "alumnograduacion_direccion_min_size_KO";
		}

		if (!(this.max_sizeDireccion(100))) {
			this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_max_size_KO');
			return "alumnograduacion_direccion_max_size_KO";
		}

		if (!(this.validations.format('alumnograduacion_direccion', '^[A-Za-zÁÉÍÓÚÜÑñáéíóúü0123456789 ]+$'))) {
			this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_format_KO');
			return "alumnograduacion_direccion_format_KO";
		}

		this.dom.mostrar_exito_campo('alumnograduacion_direccion');
		return true;

	}

	ADD_alumnograduacion_email_validation() {

		if (!(this.not_empty('alumnograduacion_email'))) {
			this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_vacio_KO');
			return "alumnograduacion_email_vacio_KO";
		}

		if (!(this.validations.min_size('alumnograduacion_email', 5))) {
			this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_min_size_KO');
			return "alumnograduacion_email_min_size_KO";
		}

		if (!(this.validations.max_size('alumnograduacion_email', 40))) {
			this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_max_size_KO');
			return "alumnograduacion_email_max_size_KO";
		}

		if (!(this.validations.format('alumnograduacion_email', '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'))) {
			this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_format_KO');
			return "alumnograduacion_email_format_KO";
		}

		this.dom.mostrar_exito_campo('alumnograduacion_email');
		return true;

	}

	ADD_nuevo_alumnograduacion_fotoacto_validation() {

		if (!(this.validations.not_exist_file('nuevo_alumnograduacion_fotoacto'))) {
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_vacio_KO');
			return "nuevo_alumnograduacion_fotoacto_vacio_KO";
		}

		if (!(this.validations.max_size_file('nuevo_alumnograduacion_fotoacto', 20000000))) {
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_max_size_KO');
			return "nuevo_alumnograduacion_fotoacto_max_size_KO";
		}


		if (!(this.min_size_fotoacto(7))) {
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_nombrefoto_min_size_KO');
			return "nuevo_alumnograduacion_fotoacto_nombrefoto_min_size_KO";
		}

		if (!(this.max_size_fotoacto(40))) {
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_nombrefoto_max_size_KO');
			return "nuevo_alumnograduacion_fotoacto_nombrefoto_max_size_KO";
		}

		if (!(this.validations.type_file('nuevo_alumnograduacion_fotoacto', ['image/jpeg']))) {
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_format_KO');
			return "nuevo_alumnograduacion_fotoacto_format_KO";
		}
		if (!(this.validations.format_name_file('nuevo_alumnograduacion_fotoacto', '^[a-zA-Z.]+$'))) {
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_nombrefoto_format_KO');
			return "nuevo_alumnograduacion_fotoacto_nombrefoto_format_KO";
		}

		this.dom.mostrar_exito_campo('nuevo_alumnograduacion_fotoacto');
		return true;

	}

	/**
		
		@param 
		@return
			{bool} true if all field validations are correct or false if any field validation is false

	*/
	ADD_submit_alumnograduacion() {

		let result = (
			(this.ADD_alumnograduacion_login_validation()) &
			(this.ADD_alumnograduacion_password_validation()) &
			(this.ADD_alumnograduacion_nombre_validation()) &
			(this.ADD_alumnograduacion_apellidos_validation()) &
			(this.ADD_alumnograduacion_titulacion_validation()) &
			(this.ADD_alumnograduacion_dni_validation()) &
			(this.ADD_alumnograduacion_telefono_validation()) &
			(this.ADD_alumnograduacion_direccion_validation()) &
			(this.ADD_alumnograduacion_email_validation()) &
			(this.ADD_nuevo_alumnograduacion_fotoacto_validation())

		)

		result = Boolean(result);

		return result;


	}

	EDIT_alumnograduacion_login_validation() {
		if (!(this.not_empty('alumnograduacion_login'))) {
			this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_vacio_KO');
			return "alumnograduacion_login_vacio_KO";
		}
		if (!(this.validations.min_size('alumnograduacion_login', 4))) {
			this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_min_size_KO');
			return "alumnograduacion_login_min_size_KO";
		}

		if (!(this.validations.max_size('alumnograduacion_login', 15))) {
			this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_max_size_KO');
			return "alumnograduacion_login_max_size_KO";
		}

		if (!(this.validations.format('alumnograduacion_login', '^[A-Za-z]+$'))) {
			this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_format_KO');
			return "alumnograduacion_login_format_KO";
		}

		this.dom.mostrar_exito_campo('alumnograduacion_login');
		return true;
	}

	EDIT_alumnograduacion_password_validation() {
		if (!(this.not_empty('alumnograduacion_password'))) {
			this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_vacio_KO');
			return "alumnograduacion_password_vacio_KO";
		}

		if (!(this.validations.min_size('alumnograduacion_password', 8))) {
			this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_min_size_KO');
			return "alumnograduacion_password_min_size_KO";
		}

		if (!(this.validations.max_size('alumnograduacion_password', 64))) {
			this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_max_size_KO');
			return "alumnograduacion_password_max_size_KO";
		}

		if (!(this.validations.format('alumnograduacion_password', '^[A-Za-z ]+$'))) {
			this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_format_KO');
			return "alumnograduacion_password_format_KO";
		}

		this.dom.mostrar_exito_campo('alumnograduacion_password');
		return true;

	}

	EDIT_alumnograduacion_nombre_validation() {

		if (!(this.not_empty('alumnograduacion_nombre'))) {
			this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_vacio_KO');
			return "alumnograduacion_nombre_vacio_KO";
		}

		if (!(this.validations.min_size('alumnograduacion_nombre', 2))) {
			this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_min_size_KO');
			return "alumnograduacion_nombre_min_size_KO";
		}

		if (!(this.validations.max_size('alumnograduacion_nombre', 25))) {
			this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_max_size_KO');
			return "alumnograduacion_nombre_max_size_KO";
		}

		if (!(this.validations.format('alumnograduacion_nombre', '^[A-Za-zÁÉÍÓÚÜÑñáéíóúü ]+$'))) {
			this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_format_KO');
			return "alumnograduacion_nombre_format_KO";
		}

		this.dom.mostrar_exito_campo('alumnograduacion_nombre');
		return true;

	}

	EDIT_alumnograduacion_apellidos_validation() {

		if (!(this.not_empty('alumnograduacion_apellidos'))) {
			this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_vacio_KO');
			return "alumnograduacion_apellidos_vacio_KO";
		}

		if (!(this.validations.min_size('alumnograduacion_apellidos', 2))) {
			this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_min_size_KO');
			return "alumnograduacion_apellidos_min_size_KO";
		}

		if (!(this.validations.max_size('alumnograduacion_apellidos', 35))) {
			this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_max_size_KO');
			return "alumnograduacion_apellidos_max_size_KO";
		}

		if (!(this.validations.format('alumnograduacion_apellidos', '^[A-Za-zÁÉÍÓÚÜÑñáéíóúü ]+$'))) {
			this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_format_KO');
			return "alumnograduacion_apellidos_format_KO";
		}

		this.dom.mostrar_exito_campo('alumnograduacion_apellidos');
		return true;

	}

	EDIT_alumnograduacion_titulacion_validation() {

		const allowed = ['GREI', 'GRIA', 'MEI', 'MIA', 'PCEO'];
		const el = document.getElementById('alumnograduacion_titulacion');
		const value = el ? el.value : '';

		if (!value) {
			this.dom.mostrar_error_campo('alumnograduacion_titulacion', 'alumnograduacion_titulacion_vacio_KO');
			return 'alumnograduacion_titulacion_vacio_KO';
		}

		if (!allowed.includes(value)) {
			this.dom.mostrar_error_campo('alumnograduacion_titulacion', 'alumnograduacion_titulacion_format_KO');
			return 'alumnograduacion_titulacion_format_KO';
		}

		this.dom.mostrar_exito_campo('alumnograduacion_titulacion');
		return true;

	}

	EDIT_alumnograduacion_dni_validation() {
		let id = "alumnograduacion_dni";
		if (!(this.not_empty('alumnograduacion_dni'))) {
			this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_dni_vacio_KO');
			return "alumnograduacion_dni_vacio_KO";
		}

		if (!this.validations.min_size(id, 9)) {
			this.dom.mostrar_error_campo(id, "alumnograduacion_dni_min_size_KO");
			return "alumnograduacion_dni_min_size_KO";
		}
		if (!this.validations.max_size(id, 9)) {
			this.dom.mostrar_error_campo(id, "alumnograduacion_dni_max_size_KO");
			return "alumnograduacion_dni_max_size_KO";
		}
		if (!this.validations.format(id, "^[0-9]{8}[A-Z]$")) {
			this.dom.mostrar_error_campo(id, "alumnograduacion_dni_format_KO");
			return "alumnograduacion_dni_format_KO";
		}
		if (!this.validDNIoNIE(document.getElementById(id).value)) {
			this.dom.mostrar_error_campo(id, "alumnograduacion_dni_format_KO");
			return "alumnograduacion_dni_format_KO";
		}

		this.dom.mostrar_exito_campo(id);
		return true;
	}

	EDIT_alumnograduacion_telefono_validation() {
		if (!(this.not_empty('alumnograduacion_telefono'))) {
			this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_vacio_KO');
			return "alumnograduacion_telefono_vacio_KO";
		}

		if (!(this.validations.min_size('alumnograduacion_telefono', 9))) {
			this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_min_size_KO');
			return "alumnograduacion_telefono_min_size_KO";
		}

		if (!(this.validations.max_size('alumnograduacion_telefono', 9))) {
			this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_max_size_KO');
			return "alumnograduacion_telefono_max_size_KO";
		}

		if (!(this.validations.format('alumnograduacion_telefono', '^[0-9]+$'))) {
			this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_format_KO');
			return "alumnograduacion_telefono_format_KO";
		}

		this.dom.mostrar_exito_campo('alumnograduacion_telefono');
		return true;

	}

	EDIT_alumnograduacion_direccion_validation() {

		if (!(this.not_empty('alumnograduacion_direccion'))) {
			this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_vacio_KO');
			return "alumnograduacion_direccion_vacio_KO";
		}

		if (!(this.min_sizeDireccion(5))) {
			this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_min_size_KO');
			return "alumnograduacion_direccion_min_size_KO";
		}

		if (!(this.max_sizeDireccion(100))) {
			this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_max_size_KO');
			return "alumnograduacion_direccion_max_size_KO";
		}

		if (!(this.validations.format('alumnograduacion_direccion', '^[A-Za-zÁÉÍÓÚÜÑñáéíóúü1234567890 ]+$'))) {
			this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_format_KO');
			return "alumnograduacion_direccion_format_KO";
		}

		this.dom.mostrar_exito_campo('alumnograduacion_direccion');
		return true;

	}

	EDIT_alumnograduacion_email_validation() {

		if (!(this.not_empty('alumnograduacion_email'))) {
			this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_vacio_KO');
			return "alumnograduacion_email_vacio_KO";
		}

		if (!(this.validations.min_size('alumnograduacion_email', 5))) {
			this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_min_size_KO');
			return "alumnograduacion_email_min_size_KO";
		}

		if (!(this.validations.max_size('alumnograduacion_email', 40))) {
			this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_max_size_KO');
			return "alumnograduacion_email_max_size_KO";
		}


		if (!(this.validations.format('alumnograduacion_email', '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'))) {
			this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_format_KO');
			return "alumnograduacion_email_format_KO";
		}

		this.dom.mostrar_exito_campo('alumnograduacion_email');
		return true;

	}

	EDIT_nuevo_alumnograduacion_fotoacto_validation() {

		if (!(this.validations.not_exist_file('nuevo_alumnograduacion_fotoacto'))) {
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_vacio_KO');
			return "nuevo_alumnograduacion_fotoacto_vacio_KO";
		}

		if (!(this.validations.max_size_file('nuevo_alumnograduacion_fotoacto', 20000000))) {
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_max_size_KO');
			return "nuevo_alumnograduacion_fotoacto_max_size_KO";
		}

		if (!(this.validations.type_file('nuevo_alumnograduacion_fotoacto', ['image/jpeg']))) {
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_format_KO');
			return "nuevo_alumnograduacion_fotoacto_format_KO";
		}

		if (!(this.validations.format_name_file('nuevo_alumnograduacion_fotoacto', '^[a-zA-Z.]+$'))) {
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_nombrefoto_format_KO');
			return "nuevo_alumnograduacion_fotoacto_nombrefoto_format_KO";
		}

		if (!(this.min_size_fotoacto(7))) {
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_nombrefoto_min_size_KO');
			return "nuevo_alumnograduacion_fotoacto_nombrefoto_min_size_KO";
		}

		if (!(this.max_size_fotoacto(40))) {
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_nombrefoto_max_size_KO');
			return "nuevo_alumnograduacion_fotoacto_nombrefoto_max_size_KO";
		}

		this.dom.mostrar_exito_campo('nuevo_alumnograduacion_fotoacto');
		return true;

	}


	EDIT_submit_alumnograduacion() {

		let result = (
			(this.EDIT_alumnograduacion_login_validation()) &
			(this.EDIT_alumnograduacion_password_validation()) &
			(this.EDIT_alumnograduacion_nombre_validation()) &
			(this.EDIT_alumnograduacion_apellidos_validation()) &
			(this.EDIT_alumnograduacion_titulacion_validation()) &
			(this.EDIT_alumnograduacion_dni_validation()) &
			(this.EDIT_alumnograduacion_telefono_validation()) &
			(this.EDIT_alumnograduacion_direccion_validation()) &
			(this.EDIT_alumnograduacion_email_validation()) &
			(this.EDIT_nuevo_alumnograduacion_fotoacto_validation())

		)

		result = Boolean(result);

		return result;
	}

	/* Validaciones para SEARCH */

	SEARCH_alumnograduacion_login_validation() {

		if (!(this.validations.max_size('alumnograduacion_login', 15))) {
			this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_max_size_KO');
			return "alumnograduacion_login_max_size_KO";
		}

		if (!(this.validations.format('alumnograduacion_login', '^[A-Za-z]*$'))) {
			this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_format_KO');
			return "alumnograduacion_login_format_KO";
		}

		this.dom.mostrar_exito_campo('alumnograduacion_login');
		return true;

	}

	SEARCH_alumnograduacion_password_validation() {

		if (!(this.validations.max_size('alumnograduacion_password', 64))) {
			this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_max_size_KO');
			return "alumnograduacion_password_max_size_KO";
		}

		if (!(this.validations.format('alumnograduacion_password', '^[A-Za-z ]*$'))) {
			this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_format_KO');
			return "alumnograduacion_password_format_KO";
		}

		this.dom.mostrar_exito_campo('alumnograduacion_password');
		return true;

	}

	SEARCH_alumnograduacion_nombre_validation() {

		if (!(this.validations.max_size('alumnograduacion_nombre', 25))) {
			this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_max_size_KO');
			return "alumnograduacion_nombre_max_size_KO";
		}

		if (!(this.validations.format('alumnograduacion_nombre', '^[A-Za-zÁÉÍÓÚÜÑñáéíóúü ]*$'))) {
			this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_format_KO');
			return "alumnograduacion_nombre_format_KO";
		}

		this.dom.mostrar_exito_campo('alumnograduacion_nombre');
		return true;

	}

	SEARCH_alumnograduacion_apellidos_validation() {

		if (!(this.validations.max_size('alumnograduacion_apellidos', 35))) {
			this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_max_size_KO');
			return "alumnograduacion_apellidos_max_size_KO";
		}

		if (!(this.validations.format('alumnograduacion_apellidos', '^[A-Za-zÁÉÍÓÚÜÑñáéíóúü ]*$'))) {
			this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_format_KO');
			return "alumnograduacion_apellidos_format_KO";
		}

		this.dom.mostrar_exito_campo('alumnograduacion_apellidos');
		return true;

	}
	SEARCH_alumnograduacion_titulacion_validation() {
		const allowed = ['GREI', 'GRIA', 'MEI', 'MIA', 'PCEO']; // valores permitidos
		const id = 'alumnograduacion_titulacion';
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
			this.dom.mostrar_error_campo(id, 'alumnograduacion_titulacion_format_KO');
			return 'alumnograduacion_titulacion_format_KO';
		}

		this.dom.mostrar_exito_campo(id);
		return true;
	}


	SEARCH_alumnograduacion_dni_validation() {

		let id = "alumnograduacion_dni";

		if (!this.validations.max_size(id, 9)) {
			this.dom.mostrar_error_campo(id, "alumnograduacion_dni_max_size_KO");
			return "alumnograduacion_dni_max_size_KO";
		}
		if (!this.validations.format(id, "^[0-9]{8}[A-Z]$")) {
			this.dom.mostrar_error_campo(id, "alumnograduacion_dni_format_KO");
			return "alumnograduacion_dni_format_KO";
		}
		if (!this.validDNIoNIE(document.getElementById(id).value)) {
			this.dom.mostrar_error_campo(id, "alumnograduacion_dni_valid_KO");
			return "alumnograduacion_dni_format_KO";
		}

		this.dom.mostrar_exito_campo(id);
		return true;

	}

	SEARCH_alumnograduacion_direccion_validation() {


		if (!(this.max_sizeDireccion(100))) {
			this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_max_size_KO');
			return "alumnograduacion_direccion_max_size_KO";
		}
		if (!(this.validations.format('alumnograduacion_direccion', '^[A-Za-zÁÉÍÓÚÜÑñáéíóúü1234567890 ]*$'))) {
			this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_format_KO');
			return "alumnograduacion_direccion_format_KO";
		}

		this.dom.mostrar_exito_campo('alumnograduacion_direccion');
		return true;

	}

	SEARCH_alumnograduacion_telefono_validation() {

		if (!(this.validations.max_size('alumnograduacion_telefono', 9))) {
			this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_max_size_KO');
			return "alumnograduacion_telefono_max_size_KO";
		}

		if (!(this.validations.format('alumnograduacion_telefono', '^[0-9]*$'))) {
			this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_format_KO');
			return "alumnograduacion_telefono_format_KO";
		}

		this.dom.mostrar_exito_campo('alumnograduacion_telefono');
		return true;

	}

	SEARCH_alumnograduacion_email_validation() {

		if (!(this.validations.max_size('alumnograduacion_email', 40))) {
			this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_max_size_KO');
			return "alumnograduacion_email_max_size_KO";
		}

		if (!(this.validations.format('alumnograduacion_email', '^[A-Za-z0-9._@]*$'))) {
			this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_format_KO');
			return "alumnograduacion_email_format_KO";
		}

		this.dom.mostrar_exito_campo('alumnograduacion_email');
		return true;

	}

	SEARCH_alumnograduacion_fotoacto_validation() {

		if (!(this.validations.format('alumnograduacion_fotoacto', '^[a-zA-Z0-9._-]*$'))) {
			this.dom.mostrar_error_campo('alumnograduacion_fotoacto', 'alumnograduacion_fotoacto_nombrefoto_format_KO');
			return "alumnograduacion_fotoacto_nombrefoto_format_KO";
		}

		if (!(this.validations.max_size('alumnograduacion_fotoacto', 40))) {
			this.dom.mostrar_error_campo('alumnograduacion_fotoacto', 'alumnograduacion_fotoacto_nombrefoto_max_size_KO');
			return "alumnograduacion_fotoacto_nombrefoto_max_size_KO";
		}

		this.dom.mostrar_exito_campo('alumnograduacion_fotoacto');
		return true;
	}


	SEARCH_submit_alumnograduacion() {

		let result = (
			(this.SEARCH_alumnograduacion_login_validation()) &
			(this.SEARCH_alumnograduacion_password_validation()) &
			(this.SEARCH_alumnograduacion_nombre_validation()) &
			(this.SEARCH_alumnograduacion_apellidos_validation()) &
			(this.SEARCH_alumnograduacion_titulacion_validation()) &
			(this.SEARCH_alumnograduacion_dni_validation()) &
			(this.SEARCH_alumnograduacion_telefono_validation()) &
			(this.SEARCH_alumnograduacion_direccion_validation()) &
			(this.SEARCH_alumnograduacion_email_validation()) &
			(this.SEARCH_alumnograduacion_fotoacto_validation())

		)

		result = Boolean(result);

		return result;

	}


	/* dwea dni rodeiro puto */
	validDNIoNIE(valor) {
		if (valor == null) return false;

		// Normaliza: quita espacios/guiones y pasa a mayúsculas
		let v = String(valor).toUpperCase().replace(/[\s-]/g, '');

		const TABLA = "TRWAGMYFPDXBNJZSQVHLCKE";

		// Patrones aceptados
		const reDNI = /^\d{8}[A-Z]$/;              // 8 dígitos + letra
		const reNIE = /^[XYZKLM]\d{7}[A-Z]$/;      // X/Y/Z/K/L/M + 7 dígitos + letra

		if (!reDNI.test(v) && !reNIE.test(v)) return false;

		// Obtiene el número base para el cálculo del índice
		let numStr;
		if (reDNI.test(v)) {
			numStr = v.slice(0, 8);                  // 8 dígitos
		} else {
			// NIE/KLM: mapea la letra inicial a 0/1/2 (K/L/M → 0, X→0, Y→1, Z→2)
			const mapa = { X: '0', Y: '1', Z: '2', K: '0', L: '0', M: '0' };
			numStr = mapa[v[0]] + v.slice(1, 8);     // queda un número de 8 cifras
		}

		const numero = parseInt(numStr, 10);
		const letraEsperada = TABLA[numero % 23];
		const letraReal = v[v.length - 1];

		return letraReal === letraEsperada;
	}


	createForm_EDIT(fila) {

		// limpiar poner titulo y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form', 'block');

		this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_persona_EDIT');

		// rellenar onsubmit y action
		this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.EDIT_submit_' + this.nombreentidad);
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.EDIT();');

		//activar el link al fichero
		this.dom.assign_property_value('link_alumnograduacion_fotoacto', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_alumnograduacion_fotoacto/' + fila.alumnograduacion_fotoacto);

		// rellenar valores
		this.dom.rellenarvaloresform(fila);

		// poner las validaciones
		this.dom.colocarvalidaciones('form_iu', 'EDIT');

		// poner inactivos los campos correspondientes
		this.dom.assign_property_value('alumnograduacion_dni', 'readonly', 'true');
		this.dom.assign_property_value('alumnograduacion_fotoacto', 'readonly', 'true');

		// colocar boton de submit
		this.dom.colocarboton('EDIT');

		setLang();

	}

	createForm_DELETE(fila) {

		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();

		this.dom.show_element('Div_IU_form', 'block');
		this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_persona_DELETE');

		// rellenar y action
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');

		// poner no visible el campo nuevo_alumnograduacion_fotoacto (solo se puede ver el nombre de fichero)
		this.dom.hide_element_form('nuevo_alumnograduacion_fotoacto');
		this.dom.assign_property_value('link_alumnograduacion_fotoacto', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_alumnograduacion_fotoacto/' + fila.alumnograduacion_fotoacto);

		// rellenar valores
		this.dom.rellenarvaloresform(fila);

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
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_persona_SHOWCURRENT');

		// rellenar y action
		//this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');

		// poner no visible el campo nuevo_alumnograduacion_fotoacto (solo se puede ver el nombre de fichero)
		this.dom.hide_element_form('nuevo_alumnograduacion_fotoacto');
		this.dom.assign_property_value('link_alumnograduacion_fotoacto', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_alumnograduacion_fotoacto/' + fila.alumnograduacion_fotoacto);

		// rellenar valores
		this.dom.rellenarvaloresform(fila);

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
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_persona_ADD');

		// poner onsubmit
		this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.ADD_submit_' + this.nombreentidad + '()');

		// poner action
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.ADD();');

		// poner no visible el campo alumnograduacion_fotoacto (solo se puede subir fichero)
		this.dom.hide_element_form('alumnograduacion_fotoacto');
		this.dom.hide_element('link_alumnograduacion_fotoacto');

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
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_persona_SEARCH');

		// poner onsubmit
		this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.SEARCH_submit_' + this.nombreentidad);

		// poner action
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.SEARCH();');

		// poner no visible el campo alumnograduacion_fotoacto (solo se puede subir fichero)
		this.dom.hide_element_form('nuevo_alumnograduacion_fotoacto');
		this.dom.hide_element('link_alumnograduacion_fotoacto');

		// reemplazar enumerados por texto
		// titulacion_persona que es un select
		this.dom.replaceSelectXEmptyInput('alumnograduacion_titulacion');
		// menu_persona que es un checkbox
		//this.dom.replaceEnumNameXEmptyInput('menu_persona');
		// genero_persona que es un radio
		//this.dom.replaceEnumNameXEmptyInput('genero_persona');

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
	mostrarcambioatributo(atributo, valorentrada) {

		switch (atributo) {
			case 'fechaNacimiento_persona':
				var elementos = valorentrada.split('-');

				var day = elementos[2];
				var month = elementos[1];
				var year = elementos[0];

				return day + '/' + month + '/' + year;
				break;
			case 'alumnograduacion_fotoacto':
				var link = 'error';
				if (valorentrada !== '') {
					link = valorentrada + `  <a class="link_alumnograduacion_fotoacto" href="http://193.147.87.202/ET2/filesuploaded/files_alumnograduacion_fotoacto/` + valorentrada + `"><img src="./iconos/FILE.png" /></a>`;
				}
				return link;
				break;
			case 'default':
				alert('no existe mostrar especial para ese atributo');
				break;
		}

	}


	min_sizeDireccion(minsize) {
		let elemento = document.getElementById("alumnograduacion_direccion").value;
		if (elemento.length < minsize) {
			return false;
		}
		else {
			return true;
		}
	}
	max_sizeDireccion(maxsize) {
		let elemento = document.getElementById("alumnograduacion_direccion").value;
		if (elemento.length > maxsize) {
			return false;
		}
		else {
			return true;
		}
	}

	min_size_fotoacto(minsize) {
		let objfile = document.getElementById("nuevo_alumnograduacion_fotoacto");
		let valor = objfile.files[0].name;
		if (valor.length < minsize) {
			return false;
		}
		else {
			return true;
		}
	}
	max_size_fotoacto(maxsize) {
		let objfile = document.getElementById("nuevo_alumnograduacion_fotoacto");
		let valor = objfile.files[0].name;
		if (valor.length > maxsize) {
			return false;
		}
		else {
			return true;
		}
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


	mostrarcambioatributo(atributo, valoratributo) {
		if (atributo === 'alumnograduacion_fotoacto') {
			if (!valoratributo) return `<a class="no_file_found"></a>`;

			const id = `link_alumnograduacion_fotoacto_${ valoratributo }`;
			const url = `http://193.147.87.202/ET2/filesuploaded/files_alumnograduacion_fotoacto/${valoratributo}`;

			return `
			<a id="${id}" href="${url}" target="_blank">
				<img src="./iconos/FILE.png" alt="Archivo" />
			</a>
		`;
		}

		// Si no es el atributo esperado, devolver el valor tal cual
		return valoratributo;
	}

}