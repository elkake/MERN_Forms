import { Sequelize, DataTypes } from 'sequelize'
import { objDB } from './conectionEnv.js'

export const sequelize = new Sequelize(
  objDB.DB_DATABASE,
  objDB.DB_USER,
  objDB.DB_PASSWORD,
  {
    host: objDB.DB_HOST,
    dialect: 'mysql',
    pool: {
      max: 15,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
)

// todo tablas de tienda

export const Usuario = sequelize.define(
  'usuario',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    edad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false
    },
    provincia: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ciudad: {
      type: DataTypes.STRING,
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postal: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    estado: {
      type: DataTypes.ENUM('activo', 'inactivo'),
      allowNull: false,
      defaultValue: 'activo'
    }
  },
  {
    defaultScope: {
      attributes: { exclude: ['password'] }
    }
  }
)

export const Pedido = sequelize.define('pedido', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  estado: {
    type: DataTypes.ENUM('procesando', 'envolviendo', 'enviado', 'completado'),
    allowNull: false,
    defaultValue: 'procesando'
  }
})

export const Producto = sequelize.define('producto', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  codigo: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

export const Imagenes = sequelize.define('imagenes', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  img: {
    type: DataTypes.STRING
  }
})

export const PedidosProductos = sequelize.define('pedido_producto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

export const Historial = sequelize.define('historial', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  unitario: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0.0
  },
  total: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0.0
  }
})

// *relationship
Pedido.belongsTo(Usuario, { foreignKey: 'id_usuario' })
PedidosProductos.belongsTo(Pedido, {
  foreignKey: 'id_pedido'
})
PedidosProductos.belongsTo(Producto, {
  foreignKey: 'id_producto'
})
Historial.belongsTo(PedidosProductos, { foreignKey: 'id_pedpro' })
Imagenes.belongsTo(Producto, { foreignKey: 'id_producto' })

// *synchronized
sequelize.sync()
