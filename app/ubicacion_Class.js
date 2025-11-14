class ubicacion extends EntidadAbstracta {

	constructor(esTest) {

		super();

		this.columnasamostrar = ['id_site', 'site_provider_login'],
			this.mostrarespecial = ['site_north_photo', 'site_west_photo'];
		this.nombreentidad = 'ubicacion';

		// definicion de los atributos del formulario (Necesario para test de unidad)
		this.attributes = [
			'id_site',
			'site_latitud',
			'site_longitud',
            'site_altitude',
            'site_locality',
            'site_provider_login', 
            'site_north_photo',
            'site_south_photo',
            'site_west_photo', 
            'site_east_photo',
		
		];


	}

    manual_form_creation() {

        var form_content = `
            <form id='form_iu' action="http://193.147.87.202/procesaform.php" method="POST" enctype="multipart/form-data">
    
                <!-- ID SITE -->
                <label class="label_id_site"></label>
                <input type='text' id='id_site' name='id_site'></input>
                <span id="span_error_id_site"><a id="error_id_site"></a></span>
                <br>
    
                <!-- LATITUD -->
                <label class="label_site_latitud"></label>
                <input type='text' id='site_latitud' name='site_latitud'></input>
                <span id="span_error_site_latitud"><a id="error_site_latitud"></a></span>
                <br>
    
                <!-- LONGITUD -->
                <label class="label_site_longitud"></label>
                <input type='text' id='site_longitud' name='site_longitud'></input>
                <span id="span_error_site_longitud"><a id="error_site_longitud"></a></span>
                <br>
    
                <!-- ALTITUD -->
                <label class="label_site_altitude"></label>
                <input type='text' id='site_altitude' name='site_altitude'></input>
                <span id="span_error_site_altitude"><a id="error_site_altitude"></a></span>
                <br>
    
                <!-- LOCALIDAD -->
                <label class="label_site_locality"></label>
                <input type='text' id='site_locality' name='site_locality'></input>
                <span id="span_error_site_locality"><a id="error_site_locality"></a></span>
                <br>
    
                <!-- PROVIDER LOGIN -->
                <label class="label_site_provider_login"></label>
                <input type='text' id='site_provider_login' name='site_provider_login'></input>
                <span id="span_error_site_provider_login"><a id="error_site_provider_login"></a></span>
                <br>
    
                <!-- FOTO NORTH -->
                <label id="label_site_north_photo" class="label_site_north_photo"></label>
                <input type='text' id='site_north_photo' name='site_north_photo'></input>
                <span id="span_error_site_north_photo"><a id="error_site_north_photo"></a></span>
                <a id="link_site_north_photo" href="http://193.147.87.202/ET2/filesuploaded/files_site_north_photo/">
                    <img src="./iconos/FILE.png" />
                </a>
    
                <label id="label_nuevo_site_north_photo" class="label_nuevo_site_north_photo"></label>
                <input type='file' id='nuevo_site_north_photo' name='nuevo_site_north_photo'></input>
                <span id="span_error_nuevo_site_north_photo"><a id="error_nuevo_site_north_photo"></a></span>
                <br>
    
                <!-- FOTO SOUTH -->
                <label id="label_site_south_photo" class="label_site_south_photo"></label>
                <input type='text' id='site_south_photo' name='site_south_photo'></input>
                <span id="span_error_site_south_photo"><a id="error_site_south_photo"></a></span>
                <a id="link_site_south_photo" href="http://193.147.87.202/ET2/filesuploaded/files_site_south_photo/">
                    <img src="./iconos/FILE.png" />
                </a>
    
                <label id="label_nuevo_site_south_photo" class="label_nuevo_site_south_photo"></label>
                <input type='file' id='nuevo_site_south_photo' name='nuevo_site_south_photo'></input>
                <span id="span_error_nuevo_site_south_photo"><a id="error_nuevo_site_south_photo"></a></span>
                <br>
    
                <!-- FOTO WEST -->
                <label id="label_site_west_photo" class="label_site_west_photo"></label>
                <input type='text' id='site_west_photo' name='site_west_photo'></input>
                <span id="span_error_site_west_photo"><a id="error_site_west_photo"></a></span>
                <a id="link_site_west_photo" href="http://193.147.87.202/ET2/filesuploaded/files_site_west_photo/">
                    <img src="./iconos/FILE.png" />
                </a>
    
                <label id="label_nuevo_site_west_photo" class="label_nuevo_site_west_photo"></label>
                <input type='file' id='nuevo_site_west_photo' name='nuevo_site_west_photo'></input>
                <span id="span_error_nuevo_site_west_photo"><a id="error_nuevo_site_west_photo"></a></span>
                <br>
    
                <!-- FOTO EAST -->
                <label id="label_site_east_photo" class="label_site_east_photo"></label>
                <input type='text' id='site_east_photo' name='site_east_photo'></input>
                <span id="span_error_site_east_photo"><a id="error_site_east_photo"></a></span>
                <a id="link_site_east_photo" href="http://193.147.87.202/ET2/filesuploaded/files_site_east_photo/">
                    <img src="./iconos/FILE.png" />
                </a>
    
                <label id="label_nuevo_site_east_photo" class="label_nuevo_site_east_photo"></label>
                <input type='file' id='nuevo_site_east_photo' name='nuevo_site_east_photo'></input>
                <span id="span_error_nuevo_site_east_photo"><a id="error_nuevo_site_east_photo"></a></span>
                <br>
    
                <input id="submit_button" type="submit" value="Submit">
    
            </form>
        `;
    
        return form_content;
    }

    ADD_id_site_validation() {

        // No puede estar vacío
        if (!(this.not_empty('id_site'))) {
            this.dom.mostrar_error_campo('id_site', 'id_site_vacio_KO');
            return "id_site_vacio_KO";
        }
    
        // Solo números
        if (!(this.validations.format('id_site', '^[0-9]+$'))) {
            this.dom.mostrar_error_campo('id_site', 'id_site_format_KO');
            return "id_site_format_KO";
        }
    
        // Tamaño mínimo 1
        if (!(this.min_size('id_site', 1))) {
            this.dom.mostrar_error_campo('id_site', 'id_site_min_size_KO');
            return "id_site_min_size_KO";
        }
    
        // Tamaño máximo 11
        if (!(this.max_size('id_site', 11))) {
            this.dom.mostrar_error_campo('id_site', 'id_site_max_size_KO');
            return "id_site_max_size_KO";
        }
    
        this.dom.mostrar_exito_campo('id_site');
        return true;
    }
    
    ADD_site_latitud_validation() {

        // No vacío
        if (!(this.not_empty('site_latitud'))) {
            this.dom.mostrar_error_campo('site_latitud', 'site_latitud_vacio_KO');
            return "site_latitud_vacio_KO";
        }
    
        // Formato decimal con signo y hasta 6 decimales
        if (!(this.validations.format('site_latitud', '^-?[0-9]{1,9}(\\.[0-9]{1,6})?$'))) {
            this.dom.mostrar_error_campo('site_latitud', 'site_latitud_format_KO');
            return "site_latitud_format_KO";
        }
    
        const valor = document.getElementById('site_latitud').value;
    
        // Comprobar número total de decimales
        if (!this.valid_latitud_decimals(valor)) {
            this.dom.mostrar_error_campo('site_latitud', 'site_latitud_decimales_KO');
            return "site_latitud_decimales_KO";
        }
    
        // Comprobar rango WGS84 adicional
        if (!this.valid_latitud_rango(valor,-90,90)) {
            this.dom.mostrar_error_campo('site_latitud', 'site_latitud_rango_KO');
            return "site_latitud_rango_KO";
        }
    
        this.dom.mostrar_exito_campo('site_latitud');
        return true;
    }

    

    ADD_site_longitud_validation() {

        // No vacío
        if (!(this.not_empty('site_longitud'))) {
            this.dom.mostrar_error_campo('site_longitud', 'site_longitud_vacio_KO');
            return "site_longitud_vacio_KO";
        }
    
        // Formato decimal con signo y hasta 6 decimales
        if (!(this.validations.format('site_longitud', '^-?[0-9]{1,9}(\\.[0-9]{1,6})?$'))) {
            this.dom.mostrar_error_campo('site_longitud', 'site_longitud_format_KO');
            return "site_longitud_format_KO";
        }
    
        const valor = document.getElementById('site_longitud').value;
    
        // Comprobar número total de decimales
        if (!this.valid_latitud_decimals(valor)) {
            // reutilizas la misma función de decimales, sirve igual
            this.dom.mostrar_error_campo('site_longitud', 'site_longitud_decimales_KO');
            return "site_longitud_decimales_KO";
        }
    
        // Comprobar rango WGS84 (-180 a 180)
        if (!this.valid_latitud_rango(valor, -180, 180)) {
            // también reutilizas la función de rango
            this.dom.mostrar_error_campo('site_longitud', 'site_longitud_rango_KO');
            return "site_longitud_rango_KO";
        }
    
        this.dom.mostrar_exito_campo('site_longitud');
        return true;
    }
    

    ADD_site_altitude_validation() {

        if (!(this.not_empty('site_altitude'))) {
            this.dom.mostrar_error_campo('site_altitude', 'site_altitude_vacio_KO');
            return "site_altitude_vacio_KO";
        }
    
        // Solo números
        if (!(this.validations.format('site_altitude', '^[0-9]+$'))) {
            this.dom.mostrar_error_campo('site_altitude', 'site_altitude_format_KO');
            return "site_altitude_format_KO";
        }
    
        // Tamaño 1 a 4
    
        if (!(this.max_size_int('site_altitude', 4))) {
            this.dom.mostrar_error_campo('site_altitude', 'site_altitude_max_size_KO');
            return "site_altitude_max_size_KO";
        }
    
        this.dom.mostrar_exito_campo('site_altitude');
        return true;
    }
    
    

    ADD_site_locality_validation() {

        // No vacío
        if (!(this.not_empty('site_locality'))) {
            this.dom.mostrar_error_campo('site_locality', 'site_locality_vacio_KO');
            return "site_locality_vacio_KO";
        }
    
        // Tamaño mínimo 2
        if (!(this.validations.min_size('site_locality', 2))) {
            this.dom.mostrar_error_campo('site_locality', 'site_locality_min_size_KO');
            return "site_locality_min_size_KO";
        }
    
        // Tamaño máximo 40
        if (!(this.validations.max_size('site_locality', 40))) {
            this.dom.mostrar_error_campo('site_locality', 'site_locality_max_size_KO');
            return "site_locality_max_size_KO";
        }
    
        // Formato alfabético con tildes, ñ y ç
        if (!(this.validations.format('site_locality', '^[A-Za-zÁÉÍÓÚÜÑáéíóúüñÇçÀÈÌÒÙâêîôûáàäëïöüõçÇ ]+$'))) {
            this.dom.mostrar_error_campo('site_locality', 'site_locality_format_KO');
            return "site_locality_format_KO";
        }
    
        this.dom.mostrar_exito_campo('site_locality');
        return true;
    }


    ADD_site_provider_login_validation() {

        // No vacío
        if (!(this.not_empty('site_provider_login'))) {
            this.dom.mostrar_error_campo('site_provider_login', 'site_provider_login_vacio_KO');
            return "site_provider_login_vacio_KO";
        }
    
        // Tamaño mínimo 4
        if (!(this.validations.min_size('site_provider_login', 4))) {
            this.dom.mostrar_error_campo('site_provider_login', 'site_provider_login_min_size_KO');
            return "site_provider_login_min_size_KO";
        }
    
        // Tamaño máximo 30
        if (!(this.validations.max_size('site_provider_login', 30))) {
            this.dom.mostrar_error_campo('site_provider_login', 'site_provider_login_max_size_KO');
            return "site_provider_login_max_size_KO";
        }
    
        // Formato alfanumérico con guiones bajos o puntos
        if (!(this.validations.format('site_provider_login', '^[A-Za-z0-9_.]+$'))) {
            this.dom.mostrar_error_campo('site_provider_login', 'site_provider_login_format_KO');
            return "site_provider_login_format_KO";
        }
    
        this.dom.mostrar_exito_campo('site_provider_login');
        return true;
    }
    
    ADD_site_north_photo_validation() {

        if (!(this.validations.not_exist_file('nuevo_site_north_photo'))) {
            this.dom.mostrar_error_campo('nuevo_site_north_photo', 'nuevo_site_north_photo_vacio_KO');
            return "nuevo_site_north_photo_vacio_KO";
        }
    
        if (!(this.validations.max_size_file('nuevo_site_north_photo', 20000000))) {
            this.dom.mostrar_error_campo('nuevo_site_north_photo', 'nuevo_site_north_photo_max_size_KO');
            return "nuevo_site_north_photo_max_size_KO";
        }
    
        if (!(this.validations.format_name_file('nuevo_site_north_photo', '^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚüÜçÇ._-]+$'))) {
            this.dom.mostrar_error_campo('nuevo_site_north_photo', 'nuevo_site_north_photo_format_KO');
            return "nuevo_site_north_photo_format_KO";
        }
    
        if (!(this.min_size_file_name('nuevo_site_north_photo', 1))) {
            this.dom.mostrar_error_campo('nuevo_site_north_photo', 'nuevo_site_north_photo_min_size_KO');
            return "nuevo_site_north_photo_min_size_KO";
        }
    
        if (!(this.max_size_file_name('nuevo_site_north_photo', 50))) {
            this.dom.mostrar_error_campo('nuevo_site_north_photo', 'nuevo_site_north_photo_max_size_KO');
            return "nuevo_site_north_photo_max_size_KO";
        }
    
        this.dom.mostrar_exito_campo('nuevo_site_north_photo');
        return true;
    }

    ADD_site_south_photo_validation() {

        if (!(this.validations.not_exist_file('nuevo_site_south_photo'))) {
            this.dom.mostrar_error_campo('nuevo_site_south_photo', 'nuevo_site_south_photo_vacio_KO');
            return "nuevo_site_south_photo_vacio_KO";
        }
    
        if (!(this.validations.max_size_file('nuevo_site_south_photo', 20000000))) {
            this.dom.mostrar_error_campo('nuevo_site_south_photo', 'nuevo_site_south_photo_max_size_KO');
            return "nuevo_site_south_photo_max_size_KO";
        }
    
        if (!(this.validations.format_name_file('nuevo_site_south_photo', '^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚüÜçÇ._-]+$'))) {
            this.dom.mostrar_error_campo('nuevo_site_south_photo', 'nuevo_site_south_photo_format_KO');
            return "nuevo_site_south_photo_format_KO";
        }
    
        if (!(this.min_size_file_name('nuevo_site_south_photo', 1))) {
            this.dom.mostrar_error_campo('nuevo_site_south_photo', 'nuevo_site_south_photo_min_size_KO');
            return "nuevo_site_south_photo_min_size_KO";
        }
    
        if (!(this.max_size_file_name('nuevo_site_south_photo', 50))) {
            this.dom.mostrar_error_campo('nuevo_site_south_photo', 'nuevo_site_south_photo_max_size_KO');
            return "nuevo_site_south_photo_max_size_KO";
        }
    
        this.dom.mostrar_exito_campo('nuevo_site_south_photo');
        return true;
    }

    ADD_site_east_photo_validation() {

        if (!(this.validations.not_exist_file('nuevo_site_east_photo'))) {
            this.dom.mostrar_error_campo('nuevo_site_east_photo', 'nuevo_site_east_photo_vacio_KO');
            return "nuevo_site_east_photo_vacio_KO";
        }
    
        if (!(this.validations.max_size_file('nuevo_site_east_photo', 20000000))) {
            this.dom.mostrar_error_campo('nuevo_site_east_photo', 'nuevo_site_east_photo_max_size_KO');
            return "nuevo_site_east_photo_max_size_KO";
        }
    
        if (!(this.validations.format_name_file('nuevo_site_east_photo', '^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚüÜçÇ._-]+$'))) {
            this.dom.mostrar_error_campo('nuevo_site_east_photo', 'nuevo_site_east_photo_format_KO');
            return "nuevo_site_east_photo_format_KO";
        }
    
        if (!(this.min_size_file_name('nuevo_site_east_photo', 1))) {
            this.dom.mostrar_error_campo('nuevo_site_east_photo', 'nuevo_site_east_photo_min_size_KO');
            return "nuevo_site_east_photo_min_size_KO";
        }
    
        if (!(this.max_size_file_name('nuevo_site_east_photo', 50))) {
            this.dom.mostrar_error_campo('nuevo_site_east_photo', 'nuevo_site_east_photo_max_size_KO');
            return "nuevo_site_east_photo_max_size_KO";
        }
    
        this.dom.mostrar_exito_campo('nuevo_site_east_photo');
        return true;
    }


    ADD_site_west_photo_validation() {

        if (!(this.validations.not_exist_file('nuevo_site_west_photo'))) {
            this.dom.mostrar_error_campo('nuevo_site_west_photo', 'nuevo_site_west_photo_vacio_KO');
            return "nuevo_site_west_photo_vacio_KO";
        }
    
        if (!(this.validations.max_size_file('nuevo_site_west_photo', 20000000))) {
            this.dom.mostrar_error_campo('nuevo_site_west_photo', 'nuevo_site_west_photo_max_size_KO');
            return "nuevo_site_west_photo_max_size_KO";
        }
    
        if (!(this.validations.format_name_file('nuevo_site_west_photo', '^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚüÜçÇ._-]+$'))) {
            this.dom.mostrar_error_campo('nuevo_site_west_photo', 'nuevo_site_west_photo_format_KO');
            return "nuevo_site_west_photo_format_KO";
        }
    
        if (!(this.min_size_file_name('nuevo_site_west_photo', 1))) {
            this.dom.mostrar_error_campo('nuevo_site_west_photo', 'nuevo_site_west_photo_min_size_KO');
            return "nuevo_site_west_photo_min_size_KO";
        }
    
        if (!(this.max_size_file_name('nuevo_site_west_photo', 50))) {
            this.dom.mostrar_error_campo('nuevo_site_west_photo', 'nuevo_site_west_photo_max_size_KO');
            return "nuevo_site_west_photo_max_size_KO";
        }
    
        this.dom.mostrar_exito_campo('nuevo_site_west_photo');
        return true;
    }
    
    
    ADD_submit_ubicacion() {

        let result = (
            (this.ADD_id_site_validation()) &
            (this.ADD_site_latitud_validation()) &
            (this.ADD_site_longitud_validation()) &
            (this.ADD_site_altitude_validation()) &
            (this.ADD_site_locality_validation()) &
            (this.ADD_site_provider_login_validation()) &
            (this.ADD_site_north_photo_validation()) &
            (this.ADD_site_south_photo_validation()) &
            (this.ADD_site_east_photo_validation()) &
            (this.ADD_site_west_photo_validation())
        );
    
        result = Boolean(result);
        return result;
    }
    
    
    

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    EDIT_id_site_validation(){
        ADD_id_site_validation();
        
    }

    EDIT_site_latitud_validation() {
       this.ADD_site_latitud_validationtitude_validation();  
    }
    

    EDIT_site_longitud_validation() {
        this.ADD_site_longitud_validation();
    }


    EDIT_site_altitude_validation() {
        this.ADD_site_altitude_validation();
    }

    EDIT_site_locality_validation(){
        this.ADD_site_locality_validation();
    }

    EDIT_site_provider_login_validation(){
        this.ADD_site_provider_login_validation();
    }    

    EDIT_site_north_photo_validation(){
       this.ADD_site_north_photo_validation();
    }

    EDIT_site_south_photo_validation(){
        this.ADD_site_south_photo_validation();
    }

    EDIT_site_east_photo_validation() {
        this.ADD_site_east_photo_validation();
    }

    EDIT_site_west_photo_validation() {
        this.ADD_site_west_photo_validation();
    }


    EDIT_submit_ubicacion() {

        let result = (
            (this.EDIT_id_site_validation()) &
            (this.EDIT_site_latitud_validation()) &
            (this.EDIT_site_longitud_validation()) &
            (this.EDIT_site_altitude_validation()) &
            (this.EDIT_site_locality_validation()) &
            (this.EDIT_site_provider_login_validation()) &
            (this.EDIT_site_north_photo_validation()) &
            (this.EDIT_site_south_photo_validation()) &
            (this.EDIT_site_east_photo_validation()) &
            (this.EDIT_site_west_photo_validation())
        );
    
        result = Boolean(result);
        return result;
    }
    


        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




    
    SEARCH_id_site_validation() {
    
        // Max size = 11
        if (!(this.validations.max_size('id_site', 11))) {
            this.dom.mostrar_error_campo('id_site', 'id_site_max_size_KO');
            return "id_site_max_size_KO";
        }
    
        // Formato numérico
        if (!(this.validations.format('id_site', '^[0-9]*$'))) {
            this.dom.mostrar_error_campo('id_site', 'id_site_format_KO');
            return "id_site_format_KO";
        }
    
        // OK
        this.dom.mostrar_exito_campo('id_site');
        return true;
    }

    SEARCH_site_latitud_validation() {

        // Si está vacío, está bien
        if (this.is_empty('site_latitud')) {
            this.dom.mostrar_exito_campo('site_latitud');
            return true;
        }
    
        // Formato decimal hasta 6 decimales
        if (!(this.validations.format('site_latitud', '^-?[0-9]{0,9}(\\.[0-9]{0,6})?$'))) {
            this.dom.mostrar_error_campo('site_latitud', 'site_latitud_format_KO');
            return "site_latitud_format_KO";
        }
    
        this.dom.mostrar_exito_campo('site_latitud');
        return true;
    }


    SEARCH_site_longitud_validation() {

        if (this.is_empty('site_longitud')) {
            this.dom.mostrar_exito_campo('site_longitud');
            return true;
        }
    
        if (!(this.validations.format('site_longitud', '^-?[0-9]{0,9}(\\.[0-9]{0,6})?$'))) {
            this.dom.mostrar_error_campo('site_longitud', 'site_longitud_format_KO');
            return "site_longitud_format_KO";
        }
    
        this.dom.mostrar_exito_campo('site_longitud');
        return true;
    }
    
    SEARCH_site_altitude_validation() {

        if (this.is_empty('site_altitude')) {
            this.dom.mostrar_exito_campo('site_altitude');
            return true;
        }
    
        if (!(this.validations.format('site_altitude', '^[0-9]*$'))) {
            this.dom.mostrar_error_campo('site_altitude', 'site_altitude_format_KO');
            return "site_altitude_format_KO";
        }
    
        if (!(this.max_size_int('site_altitude', 4))) {
            this.dom.mostrar_error_campo('site_altitude', 'site_altitude_max_size_KO');
            return "site_altitude_max_size_KO";
        }
    
        this.dom.mostrar_exito_campo('site_altitude');
        return true;
    }


    SEARCH_site_locality_validation() {

        // Campo opcional: vacío permitido
        const valor = document.getElementById('site_locality').value;
        if (!valor) return true;
    
        // Tamaño máximo 40
        if (!(this.validations.max_size('site_locality', 40))) {
            this.dom.mostrar_error_campo('site_locality', 'site_locality_max_size_KO');
            return "site_locality_max_size_KO";
        }
    
        // Formato alfabético
        if (!(this.validations.format('site_locality', '^[A-Za-zÁÉÍÓÚÜÑáéíóúüñÇçÀÈÌÒÙâêîôûáàäëïöüõçÇ ]*$'))) {
            this.dom.mostrar_error_campo('site_locality', 'site_locality_format_KO');
            return "site_locality_format_KO";
        }
    
        this.dom.mostrar_exito_campo('site_locality');
        return true;
    }


    SEARCH_site_provider_login_validation() {

        // Campo opcional: vacío permitido
        const valor = document.getElementById('site_provider_login').value;
        if (!valor) return true;
    
        // Tamaño máximo 30
        if (!(this.validations.max_size('site_provider_login', 30))) {
            this.dom.mostrar_error_campo('site_provider_login', 'site_provider_login_max_size_KO');
            return "site_provider_login_max_size_KO";
        }
    
        // Formato alfanumérico con guiones bajos o puntos
        if (!(this.validations.format('site_provider_login', '^[A-Za-z0-9_.]*$'))) {
            this.dom.mostrar_error_campo('site_provider_login', 'site_provider_login_format_KO');
            return "site_provider_login_format_KO";
        }
    
        this.dom.mostrar_exito_campo('site_provider_login');
        return true;
    }

    SEARCH_site_north_photo_validation() {

        const valor = document.getElementById('site_north_photo').value;
        if (!valor) return true;
    
        if (!(this.validations.format('site_north_photo', '^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚüÜçÇ._-]*$'))) {
            this.dom.mostrar_error_campo('site_north_photo', 'site_north_photo_format_KO');
            return "site_north_photo_format_KO";
        }
    
        if (!(this.validations.max_size('site_north_photo', 50))) {
            this.dom.mostrar_error_campo('site_north_photo', 'site_north_photo_max_size_KO');
            return "site_north_photo_max_size_KO";
        }
    
        this.dom.mostrar_exito_campo('site_north_photo');
        return true;
    }


    SEARCH_site_south_photo_validation() {

        const valor = document.getElementById('site_south_photo').value;
        if (!valor) return true;
    
        if (!(this.validations.format('site_south_photo', '^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚüÜçÇ._-]*$'))) {
            this.dom.mostrar_error_campo('site_south_photo', 'site_south_photo_format_KO');
            return "site_south_photo_format_KO";
        }
    
        if (!(this.validations.max_size('site_south_photo', 50))) {
            this.dom.mostrar_error_campo('site_south_photo', 'site_south_photo_max_size_KO');
            return "site_south_photo_max_size_KO";
        }
    
        this.dom.mostrar_exito_campo('site_south_photo');
        return true;
    }
    
    SEARCH_site_east_photo_validation() {

        const valor = document.getElementById('site_east_photo').value;
        if (!valor) return true;
    
        if (!(this.validations.format('site_east_photo', '^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚüÜçÇ._-]*$'))) {
            this.dom.mostrar_error_campo('site_east_photo', 'site_east_photo_format_KO');
            return "site_east_photo_format_KO";
        }
    
        if (!(this.validations.max_size('site_east_photo', 50))) {
            this.dom.mostrar_error_campo('site_east_photo', 'site_east_photo_max_size_KO');
            return "site_east_photo_max_size_KO";
        }
    
        this.dom.mostrar_exito_campo('site_east_photo');
        return true;
    }
    
    SEARCH_site_west_photo_validation() {

        const valor = document.getElementById('site_west_photo').value;
        if (!valor) return true;
    
        if (!(this.validations.format('site_west_photo', '^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚüÜçÇ._-]*$'))) {
            this.dom.mostrar_error_campo('site_west_photo', 'site_west_photo_format_KO');
            return "site_west_photo_format_KO";
        }
    
        if (!(this.validations.max_size('site_west_photo', 50))) {
            this.dom.mostrar_error_campo('site_west_photo', 'site_west_photo_max_size_KO');
            return "site_west_photo_max_size_KO";
        }
    
        this.dom.mostrar_exito_campo('site_west_photo');
        return true;
    }
    
    SEARCH_submit_ubicacion() {

        let result = (
            (this.SEARCH_site_latitud_validation()) &
            (this.SEARCH_site_longitud_validation()) &
            (this.SEARCH_site_altitude_validation()) &
            (this.SEARCH_site_locality_validation()) &
            (this.SEARCH_site_provider_login_validation()) &
            (this.SEARCH_site_north_photo_validation()) &
            (this.SEARCH_site_south_photo_validation()) &
            (this.SEARCH_site_east_photo_validation()) &
            (this.SEARCH_site_west_photo_validation())
        );
    
        result = Boolean(result);
        return result;
    }
    
    

    
    

    

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


 

    
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

    valid_latitud_decimals(valor) {
        if (valor.includes('.')) {
            const decimales = valor.split('.')[1];
            return decimales.length <= 6; 
        }
        return true; // no hay decimales → correcto
    }
   

    valid_rango(valor,min, max) {
        const num = parseFloat(valor);
    
        // Si no es número → KO
        if (isNaN(num)) return false;
    
        return num >= min && num <= max;
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


       /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    mostrarcambioatributo(clave, valor) {
        // Fotos: mostrar con icono y link si hay valor
        if (clave === 'site_north_photo' || clave === 'site_south_photo' ||
            clave === 'site_east_photo' || clave === 'site_west_photo') {
    
            if (!valor) return `<a class="no_file_found"></a>`;
    
            const id = `link_${clave}_${valor}`;
            const url = `http://193.147.87.202/ET2/filesuploaded/files_${clave}/${valor}`;
    
            return `
                <a id="${id}" href="${url}" target="_blank">
                    <img src="./iconos/FILE.png" alt="Archivo" />
                </a>
            `;
        }
    
        // Fechas (si tuvieras alguna, ejemplo site_fecha)
        if (clave === 'site_fecha') {
            return this.isoToDDMMYYYY(valor); // conviertes de ISO a DD/MM/YYYY
        }
    
        // Por defecto, devolver el valor tal cual
        return valor;
    }
 
    
    createForm_ADD() {

        // limpiar y poner visible el formulario
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_Titulo_form', 'text_contenido_Titulo_form');
        this.dom.assign_class_value('class_contenido_Titulo_form', 'text_contenido_Titulo_form_ADD');
    
        // poner onsubmit y action
        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.ADD_submit_ubicacion()');
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.ADD();');
    
        // ocultar elementos de solo visualización o autogenerados
        this.dom.hide_element('site_north_photo');
        this.dom.hide_element('site_south_photo');
        this.dom.hide_element('site_east_photo');
        this.dom.hide_element('site_west_photo');
    
        // colocar validaciones
        this.dom.colocarvalidaciones('form_iu', 'ADD');
    
        // colocar boton de submit
        this.dom.colocarboton('ADD');
    
        setLang();
    }
    
    createForm_EDIT(fila) {
    
        // limpiar y poner visible el formulario
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_Titulo_form', 'text_contenido_Titulo_form');
        this.dom.assign_class_value('class_contenido_Titulo_form', 'text_contenido_Titulo_form_EDIT');
    
        // onsubmit y action
        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.EDIT_submit_ubicacion()');
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.EDIT();');
    
        // rellenar valores
        this.dom.rellenarvaloresform(fila);
    
        // mostrar links a fotos
        this.dom.assign_property_value('site_north_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/sites/' + fila.site_north_photo);
        this.dom.assign_property_value('site_south_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/sites/' + fila.site_south_photo);
        this.dom.assign_property_value('site_east_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/sites/' + fila.site_east_photo);
        this.dom.assign_property_value('site_west_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/sites/' + fila.site_west_photo);
    
        // colocar validaciones
        this.dom.colocarvalidaciones('form_iu', 'EDIT');
    
        // campos solo lectura si aplica
        this.dom.assign_property_value('site_provider_login', 'readonly', 'true');
    
        // colocar boton de submit
        this.dom.colocarboton('EDIT');
    
        setLang();
    }
    
    createForm_DELETE(fila) {
    
        // limpiar y poner visible el formulario
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_Titulo_form', 'text_contenido_Titulo_form');
        this.dom.assign_class_value('class_contenido_Titulo_form', 'text_contenido_Titulo_form_DELETE');
    
        // action
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');
    
        // rellenar valores
        this.dom.rellenarvaloresform(fila);
    
        // mostrar links a fotos
        this.dom.assign_property_value('site_north_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/sites/' + fila.site_north_photo);
        this.dom.assign_property_value('site_south_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/sites/' + fila.site_south_photo);
        this.dom.assign_property_value('site_east_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/sites/' + fila.site_east_photo);
        this.dom.assign_property_value('site_west_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/sites/' + fila.site_west_photo);
    
        // poner todos readonly
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
    
        // rellenar valores
        this.dom.rellenarvaloresform(fila);
    
        // mostrar links a fotos
        this.dom.assign_property_value('site_north_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/sites/' + fila.site_north_photo);
        this.dom.assign_property_value('site_south_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/sites/' + fila.site_south_photo);
        this.dom.assign_property_value('site_east_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/sites/' + fila.site_east_photo);
        this.dom.assign_property_value('site_west_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/sites/' + fila.site_west_photo);
    
        // poner todos readonly
        this.dom.colocartodosreadonly('form_iu');
    
        setLang();
    }
    
    createForm_SEARCH() {

        // limpiar y poner visible el formulario
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_Titulo_form', 'text_contenido_Titulo_form');
        this.dom.assign_class_value('class_contenido_Titulo_form', 'text_contenido_Titulo_form_SEARCH');
    
        // onsubmit y action
        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.SEARCH_submit_ubicacion()');
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.SEARCH();');
    
        // ocultar links de fotos
        this.dom.hide_element('site_north_photo');
        this.dom.hide_element('site_south_photo');
        this.dom.hide_element('site_east_photo');
        this.dom.hide_element('site_west_photo');
    
        // colocar validaciones
        this.dom.colocarvalidaciones('form_iu', 'SEARCH');
    
        // colocar boton de submit
        this.dom.colocarboton('SEARCH');
    
        setLang();
    }
    


}