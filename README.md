# Documentación Actualizada de la Aplicación

Esta documentación describe la estructura, roles, funcionalidades y flujos de usuario de la aplicación. La aplicación se divide en dos módulos principales: **Vendedor** y **Administrador**.

URL = https://summer-pma.vercel.app/

---

## 1. Resumen General

### Módulo Vendedor

- **Registro de Ventas en Tiempo Real:** Permite el ingreso y seguimiento de ventas.
- **Indicadores Financieros:** Muestra Balance, Vendido, % de ganancia y Disponible.
- **Restricciones de Tiempo:** Se permiten ventas hasta 5 o 10 minutos antes de cerrar, según el contexto.
- **Proceso de Venta en Dos Pasos:**
  - **Paso 1:** Selección e ingreso inicial del número a vender.
  - **Paso 2:** Confirmación con recálculo automático (se aplica el porcentaje de ganancia y se asigna un número de serie al ticket).
- **Gestión de Tickets:** Incluye historial, anulación (dentro del límite de 5 minutos), visualización de resultados, tickets ganadores y estado de cuenta.

### Módulo Administrador

- **Configuración de Loterías:** Permite configurar loterías y gestionar parámetros.
- **Registro Contable:** Incluye la entrada de diario y registro de movimientos contables.
- **Control de Caja Inicial:** Por ejemplo, se inicia con un monto predeterminado (ej.: $1500).
- **Capacidad de Biles:** Administración y control de biles.
- **Reportes Consolidados:** Reportes de ventas, balances individuales y globales.
- **Funcionalidad Dual:** El administrador puede actuar como vendedor.
- **Utilitarios Adicionales:** Herramientas para exportar/impresión de reportes, eliminación de tickets, envío de notificaciones vía WhatsApp y gestión de préstamos.

---

## 2. Roles y Permisos

### Roles Definidos

- **Vendedor:**  
  - Registra ventas.
  - Consulta historial.
  - Anula tickets.
  - Visualiza resultados y estado de cuenta.

- **Administrador:**  
  - Configura loterías.
  - Registra pagos y cobros.
  - Consulta balances globales y reportes consolidados.
  - Puede actuar como vendedor.

- **Roles Complementarios:**  
  - Incluyen funciones adicionales como reporte, impresión y gestión de préstamos, entre otras (por ejemplo, eliminación de tickets y envío de notificaciones “wasap”).

### Restricciones en Ventas

- **Tiempo de Venta:**  
  - Ventas permitidas hasta 5 minutos antes del cierre en algunos módulos.
  - Ventas permitidas hasta 10 minutos antes del sorteo en otros.

---

## 3. Glosario y Terminología

- **Bolsa/Backup:** Fondos en el banco.
- **Biles/Chance:** Números de 2 cifras.
- **Billete:** Número de 4 cifras.
- **Modalidades de Apuesta:**
  - **Directo, Pallet, Tripleta:** Combinaciones de 2 o 3 números.
- **Indicadores Financieros:**
  - **Balance y Porcentaje:** Muestran lo vendido, lo que se debe entregar y la ganancia según un porcentaje configurable.

---

## 4. Flujo de Usuario y Navegación

### Inicio de Sesión

- El usuario se autentica y se le asigna el rol correspondiente (Vendedor, Administrador u otros roles complementarios).

### Dashboard

#### Vendedor

- **Información General:**
  - Número del vendedor, fecha, hora y notificaciones en tiempo real.
- **Indicadores Financieros:**  
  - Balance, Vendido, % de ganancia y Disponible.
- **Temporizador:**  
  - Indica el tiempo restante para la venta, considerando las restricciones de tiempo.

#### Administrador

- **Vista Global:**
  - Caja inicial, balance global, capacidad de biles y resúmenes consolidados de ventas de todos los vendedores.
- **Funcionalidad Dual:**  
  - Puede operar también como vendedor.

### Proceso de Venta (Módulo Vendedor)

#### Paso 1: Ingreso Inicial

- **Selección de Lotería:**  
  - Menú interactivo con horarios y opciones de juego.
- **Registro del Número:**  
  - Ingreso en un campo destacado (por ejemplo, marcado en amarillo).
- **Visualización Simultánea:**  
  - Se muestran datos como Balance, Vendido, % de ganancia y Disponible.
- **Modalidades de Venta:**  
  - **STRAIGHT:** Valor real.
  - **BOX/COMBO:** Modalidades opcionales (a menudo sin valor).

#### Paso 2: Confirmación

- **Confirmación y Recálculo:**  
  - Se confirma el tipo de lotería y se recalculan los montos (por ejemplo, se resta el porcentaje para determinar la ganancia).
- **Asignación del Ticket:**  
  - Se asigna un número de serie y se muestran detalles adicionales (por ejemplo: “CR Mediodía”, “Dir”).
- **Pago del Cliente:**  
  - Se muestra el monto que debe pagar el cliente.

### Gestión de Tickets

- **Historial:**
  - Listado interactivo de tickets del día, con opción de filtrar por fecha y ver detalles completos (números ganadores, montos, etc.).
- **Anulación:**
  - Permite anular tickets registrados hace menos de 5 minutos.
- **Opciones Adicionales:**
  - Funciones para copiar, enviar (incluyendo vía “wasap”) e imprimir tickets.

### Resultados y Reportes

- **Resultados y Ganadores:**
  - Detalle del total vendido por cada tipo de lotería, premios, descuentos y resultados netos.
  - Vista específica de tickets ganadores, con detalle de números, posiciones y cálculo de premios (por ejemplo: “cada Bill cuesta 0.25 y x3 equivale a $15”).
- **Estado de Cuenta:**
  - Consolida todos los movimientos financieros (pagos, cobros y balances) para visualizar el cierre del día y cada transacción.

---

## 5. Módulo Administrativo

### Gestión Contable y Registro (Entrada de Diario)

- **Registro de Movimientos:**
  - Se pueden registrar manual o automáticamente los movimientos contables, incluyendo partidas dobles, débitos, créditos, notas y referencias.

### Reportes y Balance

- **Reportes Consolidados:**
  - Identificación de vendedores activos/inactivos.
  - Exportación o impresión de reportes.
  - Consulta de balances individuales.

### Configuración y Utilitarios

- **Parámetros del Sistema:**
  - Herramientas para ajustar parámetros, controlar accesos y gestionar préstamos.
- **Notificaciones:**
  - Funcionalidad para enviar notificaciones (por ejemplo, vía WhatsApp).
