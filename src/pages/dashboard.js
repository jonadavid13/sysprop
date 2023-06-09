import React from 'react'
import '../assets/styles.scss'

function Dashboard() {
  return (
    <div>

    {/* <!--CUERPO--> */}
    <div id="cuerpo">
      <div className="m-4 row">
        <h3>Buscar Cliente</h3>
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar cliente..."
          />
        </div>
        <div className="col-3"></div>
        {/* <!-- Botón para abrir la ventana pop-up --> */}
        <button
          type="button"
          className="btn btn-primary col-2"
          data-bs-toggle="modal"
          data-bs-target="#mi-modal"
        >
          Agregar Cliente
        </button>
      </div>

      <div className="row m-4">
        <h3 className="mb-3">Clientes Registrados</h3>
        <table id="tabla-clientes" className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Cédula</th>
              <th>Teléfono</th>
              <th>Dirección</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr id="cliente-1">
              <td>1</td>
              <td>John</td>
              <td>Doe</td>
              <td>123456789</td>
              <td>555-555-5555</td>
              <td>123 Main St.</td>
              <td>
                <button className="btn btn-danger" onclick="eliminarCliente(1)">Eliminar</button>
                <button className="btn btn-warning" onclick="editarCliente(1)">Editar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* <!-- Ventana pop-up --> */}
    <div
      className="modal fade"
      id="mi-modal"
      tabindex="-1"
      aria-labelledby="mi-modal-titulo"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title" id="mi-modal-titulo">Agregar Cliente</h3>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Cerrar"
            ></button>
          </div>
          <div className="modal-body">
            {/* <!--Cuerpo del modal--> */}
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <label for="nombre" className="form-label">Nombre:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label for="apellido" className="form-label">Apellido:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="apellido"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label for="cedula" className="form-label">Cédula:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cedula"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label for="telefono" className="form-label">Teléfono:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="telefono"
                    required
                  />
                </div>
                <div className="col-md-12">
                  <label for="direccion" className="form-label">Dirección:</label>
                  <textarea
                    className="form-control"
                    id="direccion"
                    required
                  ></textarea>
                </div>
              </div>
              {/* <!--<button type="submit" className="btn btn-primary mt-3">Agregar</button>--> */}
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
            <button type="button" className="btn btn-primary">
              Guardar cambios
            </button>
          </div>
        </div>
        {/* <!--Fin del cuerpo modal--> */}
      </div>
    </div>
    </div>
  )
}

export default Dashboard