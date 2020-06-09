sap.ui.jsfragment("PlanningCalendar.PlanningCalendar.view.Fragment", {
	createContent: function (oController) {
		var oBeginButton = new sap.m.Button({
			text: "Edit",
			type: "Emphasized",
			press: oController.handleEditButton

		});

		var oEndButton = new sap.m.Button({

			text: "Delete",
			press: oController.handlePopoverDeleteButton

		});

		var olabelAdd_info = new sap.m.Label({
			text: "Additional information"
		});

		var oTextMoreInfo = new sap.m.Text({
			id: "moreInfo",
			text: "{text}"
		});

		var olabelForm = new sap.m.Label({
			text: "Form",
			labelFor: "startDate"
		});
		var oTextStartDate = new sap.m.Text({
				text: "{path: 'startDate',
				formatter: '.formatDate'
			}
			"});

			var olabelTo = new sap.m.Label({
				text: "To",
				labelFor: "endDate"
			});

			var oTextEndDate = new sap.m.Text({
					text: "{	path: 'endDate',
					formatter: '.formatDate'
				}
				"
			});

		var oCheckBox = new sap.m.CheckBox({
			id: "allDay",
			text: "All-day",
			selected: "{allDay>/allDay}",
			enabled: "false"

		});

		var oLabelAppType = new sap.m.Label({
			text: "Type",
			labelFor: "appType"
		});

		var oTextAppType = new sap.m.text({
			id: "appType",
			text: "{ path: 'type', formatter: '._typeFormatter'}"

		});

		var oSimpleForm = new sap.ui.layout.form.SimpleForm("", {
			id: "appointmentEditForm",
			editable: "false",
			layout: "ResponsiveGridLayout",
			singleContainerFullSize: "false",
			content: [olabelAdd_info,
				oTextMoreInfo,
				olabelForm,
				oTextStartDate,
				olabelTo,
				oTextEndDate,
				oCheckBox,
				oLabelAppType,
				oTextAppType
			]

		});

		var oResponsivePopover = new sap.m.ResponsivePopover("appTitle", {
			labelFor: "moreInfo",
			title: "{title}",
			class: "sapUiPopupWithPadding",
			placement: "Auto",
			beginButton: [oBeginButton],
			endButton: [oEndButton],
			content: [oSimpleForm]
		});

		return oResponsivePopover;

	}
});