sap.ui.jsview("PlanningCalendar.PlanningCalendar.view.View1", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.View1
	 */
	getControllerName: function () {
		return "PlanningCalendar.PlanningCalendar.controller.View1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.View1
	 */
	createContent: function (oController) {

		var oItemAdmin = new sap.ui.core.Item({
			key: "admin",
			text: "Admin"
		});
		var oItemManager = new sap.ui.core.Item({
			key: "manager",
			text: "Manager"
		});
		var oItemDonnaMoore = new sap.ui.core.Item({
			key: "donna",
			text: "Donna Moore"
		});

		var oTitle = new sap.m.Title({
			text: "Title",
			titleStyle: "H4"
		});
		var oLabel = new sap.m.Label({
			text: "Lodded in as"
		});
		var oSelct = new sap.m.Select({
			id: "userRole",
			change: "handleRoleChange",
			selectedKey: "admin",
			width: "230px"
		}).addItem(oItemAdmin).addItem(oItemManager).addItem(oItemDonnaMoore);
		
	var oButtonCreateAppoint = new sap.m.Button({
			id : "buttonAddNewAppointment",
			text : "Create",
			press : oController.handleAppointmentCreate,
			tooltip: "Add new appointment"
		});
		
		

		var oCalenderAppointment = new sap.ui.unified.CalendarAppointment({
			startDate: "{start}",
			endDate: "{end}",
			icon: "{pic}",
			title: "{title}",
			text: "{info}",
			type: "{type}",
			tentative: "{tentative}"
		});

		var oPlanningCalendarRow = new sap.m.PlanningCalendarRow({
			icon: "{pic}",
			title: "{name}",
			text: "{role}",
			enableAppointmentsDragAndDrop: {
				path: 'name',
				formatter: function xyz() {
					return true;
				}
			},
			enableAppointmentsResize: {
				path: 'name',
				formatter: function xyz() {
					return true;
				}
			},
			enableAppointmentsCreate: {
				path: 'name',
				formatter: function xyz() {
					return true;
				}
			},
			appointmentDrop: oController.handleAppointmentDrop,
			appointmentDragEnter: oController.handleAppointmentDragEnter,
			appointmentResize: oController.handleAppointmentResize,
			appointmentCreate: oController.handleAppointmentCreate
				//	appointments: path : 'appointments', templateShareable: true, template: oCalenderAppointment
		});
		oPlanningCalendarRow.bindAggregation("appointments", {
			path: "appointments",
			template: oCalenderAppointment,
			templateShareable: true
		});

		//	oPlanningCalendarRow.addAppointment(oCalenderAppointment);

		var oPlanningCalendar = new sap.m.PlanningCalendar({
			id: "pc1",
			startDate: "{path: '/startDate'}",
			rows: {
				path: '/people',
				template: oPlanningCalendarRow
			},
			appointmentsVisualization: "Filled",
			toolbarContent: [oTitle, oLabel, oSelct, oButtonCreateAppoint],
		//	appointmentSelect: "oController.onAppointmentSelect(${$parameters>/appointments})"
				appointmentSelect: oController.onAppointmentSelect
		});

		var oVLayoutMain = new sap.m.VBox({
			id: 'vLayoutMain',
			width: '100%',
			items: [
				oPlanningCalendar
			]
		}).addStyleClass("sapUiSmallMargin");

		var oPage = new sap.m.Page({
			title: "{i18n>title}",
			id: "page",
			content: [oVLayoutMain]
		});

		var app = new sap.m.App(this.createId("app"), {
			initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
	}

});