sap.ui.jsfragment("PlanningCalendar.PlanningCalendar.view.Fragment", {
	createContent: function (oController) {
		var oButtonBegin = new sap.m.Button({
			text: "OK",
			type: "Emphasized",
			press: "handleDialogOkButton"
		});
		var oButtonEnd = new sap.m.Button({
			text: "Cancel",
			press: "handleDialogCancelButton"
		});

		var oLabelTitle = new sap.m.Label({
			text: "Title",
			labelFor: "appTitle"
		});
		var oInputTitle = new sap.m.Input({
			id: "appTitle",
			maxLength: "255"
		});
		var oLabelAddiInfo = new sap.m.Label({
			text: "Additional information",
			labelFor: "inputInfo"
		});
		var oInputMoreinfo = new sap.m.Input({
			id: "moreInfo",
			maxLength: "255"
		});
		var oLabelTitleFrom = new sap.m.Label({
			text: "From",
			labelFor: "StartDate"
		});
		var oDTPicker_StartDate = new sap.m.DateTimePicker({
			id: 'DTPicker-startDate',
			required: "true",
			visible: "{=!${allDay>/allDay}}",
			change: "handleDateTimePickerChange"
		});
		var oDPicker_StartDate = new sap.m.DatePicker({
			id: 'DPicker-startDate',
			required: "true",
			visible: "{=!${allDay>/allDay}}",
			change: "handleDatePickerChange"
		});
		var oLabelEndDate = new sap.m.Label({
			text: "To",
			labelFor: "endDate"
		});
		var oDTPicker_EndDate = new sap.m.DateTimePicker({
			id: 'DTPicker-EndDate',
			required: "true",
			visible: "{=!${allDay>/allDay}}",
			change: "handleDateTimePickerChange"
		});
		var oDPicker_EndDate = new sap.m.DatePicker({
			id: 'DPicker-EndDate',
			required: "true",
			visible: "{=!${allDay>/allDay}}",
			change: "handleDatePickerChange"
		});

		var oCheckBoxAllDay = sap.m.CheckBox({
			id: "allDay",
			text: "All-day",
			selected: "{allDay>allDay}",
			select: "handleCheckBoxSelect"
		});

		var oLabelType = new sap.m.Label({
			text: "Type",
			labelFor: "appType"
		});
		var oItem = new sap.m.Item({
			key: "{type}",
			text: "{text}"
		});

		var selectAppType = new sap.m.Select({
			id: "appType",
			items: "{/supportedAppointmentItems}"
		}).addItem(oItem);

		var oSimpleForm = new sap.ui.layout.form.SimpleForm({
			id: "appointmentCreateForm",
			editable: "true",
			layout: "ResponsiveGridLayout",
			singleCotainerFullSize: "false",
			content: [oLabelTitle,
				oInputTitle,
				oLabelAddiInfo,
				oInputMoreinfo,
				oLabelTitleFrom,
				oDTPicker_StartDate,
				oDPicker_StartDate,
				oLabelEndDate,

				oDTPicker_EndDate,
				oDPicker_EndDate,
				oDPicker_EndDate,
				oCheckBoxAllDay,
				oLabelType,
				selectAppType
			]
		});

		var oVerticalLayout = new sap.ui.layout.VerticalLayout({
			width: "100%",
			items: [oSimpleForm]
		}).addStyleClass("sapUiContentPadding");
		var oDialog = new sap.m.Dialog({
			title: "Title",
			beginButton: [oButtonBegin],
			endButton: [oButtonEnd],
			content: [oVerticalLayout]
		});
		return oDialog;

	}
});