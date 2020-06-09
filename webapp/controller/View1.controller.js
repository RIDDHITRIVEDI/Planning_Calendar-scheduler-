sap.ui.define([
	"sap/ui/core/Fragment",
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel',
	'sap/m/MessageToast',
		"sap/ui/unified/library"

], function (Fragment, Controller, JSONModel, MessageToast,unifiedLibrary) {
	"use strict";
	var that = '';
		var CalendarDayType = unifiedLibrary.CalendarDayType;
	return Controller.extend("PlanningCalendar.PlanningCalendar.controller.View1", {

		onInit: function () {
			var oModel = new JSONModel();
			oModel.setData({
				startDate: new Date("2017", "10", "13", "8", "0"),
				people: [{
					pic: "test-resources/sap/ui/documentation/sdk/images/John_Miller.png",
					name: "John Miller",
					role: "team member",
					appointments: [{
						start: new Date("2017", "10", "13", "08", "00"),
						end: new Date("2017", "10", "13", "09", "00"),
						title: "Team sync",
						info: "Canteen",
						type: "Type07",
						pic: "sap-icon://family-care"
					}, {
						start: new Date("2017", "10", "13", "09", "0"),
						end: new Date("2017", "10", "13", "11", "0"),
						title: "Morning Sync",
						info: "I call you",
						type: "Type01",
						pic: "sap-icon://call"
					}, {
						start: new Date("2017", "10", "13", "10", "00"),
						end: new Date("2017", "10", "13", "12", "00"),
						title: "Sync Bill",
						info: "Online",
						type: "Type03"
					}, {
						start: new Date("2017", "10", "13", "10", "00"),
						end: new Date("2017", "10", "13", "13", "00"),
						title: "Check Flights",
						info: "no room",
						type: "Type09",
						pic: "sap-icon://flight"
					}, {
						start: new Date("2017", "10", "13", "13", "00"),
						end: new Date("2017", "10", "13", "14", "00"),
						title: "Lunch",
						info: "canteen",
						type: "Type05",
						pic: "sap-icon://private"
					}, {
						start: new Date("2017", "10", "13", "18", "00"),
						end: new Date("2017", "10", "13", "20", "00"),
						title: "Discussion of the plan",
						info: "Online meeting",
						type: "Type04"
					}, {
						start: new Date("2017", "10", "14", "03", "00"),
						end: new Date("2017", "10", "14", "23", "00"),
						title: "Deadline",
						type: "Type05"
					}, {
						start: new Date("2017", "10", "14", "09", "00"),
						end: new Date("2017", "10", "14", "14", "00"),
						title: "Blocker",
						info: "room 6",
						type: "Type08"
					}, {
						start: new Date("2017", "10", "17", "09", "00"),
						end: new Date("2017", "10", "17", "18", "00"),
						title: "Boss Birthday",
						type: "Type02"
					}, {
						start: new Date("2017", "10", "24", "09", "00"),
						end: new Date("2017", "10", "24", "18", "00"),
						title: "Urgent Planning",
						type: "Type08"
					}, {
						start: new Date("2017", "10", "20", "01", "00"),
						end: new Date("2017", "10", "20", "23", "00"),
						title: "Planning",
						type: "Type09"
					}]
					
				}, {
					pic: "test-resources/sap/ui/documentation/sdk/images/Donna_Moore.jpg",
					name: "Donna Moore",
					role: "team member",
					appointments: [{
						start: new Date("2017", "10", "13", "08", "00"),
						end: new Date("2017", "10", "13", "09", "26"),
						title: "Team sync",
						info: "Canteen",
						type: "Type07",
						pic: "sap-icon://family-care"
					}, {
						start: new Date("2017", "10", "13", "10", "00"),
						end: new Date("2017", "10", "13", "12", "00"),
						title: "Sync John",
						info: "Online",
						type: "Type03"
					}, {
						start: new Date("2017", "10", "13", "11", "00"),
						end: new Date("2017", "10", "13", "12", "00"),
						title: "Prep for planning",
						info: "room 5",
						type: "Type01",
						pic: "sap-icon://family-care"
					}, {
						start: new Date("2017", "10", "13", "18", "00"),
						end: new Date("2017", "10", "13", "20", "00"),
						title: "Check Flights",
						info: "no room",
						type: "Type09",
						pic: "sap-icon://flight"
					}, {
						start: new Date("2017", "10", "13", "18", "00"),
						end: new Date("2017", "10", "13", "20", "00"),
						title: "Discussion of the plan",
						info: "Online meeting",
						type: "Type04"
					}, {
						start: new Date("2017", "10", "20", "01", "00"),
						end: new Date("2017", "10", "20", "23", "00"),
						title: "Planning",
						type: "Type09"
					}, {
						start: new Date("2018", "2", "20", "01", "00"),
						end: new Date("2018", "2", "20", "23", "00"),
						title: "Off",
						type: "Type08"
					}]
				}],
					supportedAppointmentItems: [
					{
						text: "Team Meeting",
						type: CalendarDayType.Type01
					},
					{
						text: "Personal",
						type: CalendarDayType.Type05
					},
					{
						text: "Discussions",
						type: CalendarDayType.Type08
					},
					{
						text: "Out of office",
						type: CalendarDayType.Type09
					},
					{
						text: "Private meeting",
						type: CalendarDayType.Type03
					}
				]
			});
			this.getView().setModel(oModel);
			that = this;
			
			oModel = new JSONModel();
			oModel.setData({allDay: false});
			this.getView().setModel(oModel, "allDay");
		},
		roles: {
			donna: "Donna Moore",
			manager: "manager",
			admin: "admin"
		},

		handleRoleChange: function () {
			that.getView().getModel().refresh(true);
		},

		getUserRole: function () {
			return that.roles[sap.ui.getCore().byId("userRole").getSelectedKey()];
		},

		canModifyAppointments: function (S) {
		
			return true;
			//	var sUserRole = this.getUserRole();
			//	if (sUserRole === this.roles.manager || sUserRole === this.roles.admin || sUserRole === sRole) {

			//		}
		},

		handleAppointmentDragEnter: function (oEvent) {
			if (that.isAppointmentOverlap(oEvent, oEvent.getParameter("calendarRow"))) {
				oEvent.preventDefault();
			}
		},

		handleAppointmentDrop: function (oEvent) {
			var oAppointment = oEvent.getParameter("appointment"),
				oStartDate = oEvent.getParameter("startDate"),
				oEndDate = oEvent.getParameter("endDate"),
				oCalendarRow = oEvent.getParameter("calendarRow"),
				bCopy = oEvent.getParameter("copy"),
				oModel = that.getView().getModel(),
				oAppBindingContext = oAppointment.getBindingContext(),
				oRowBindingContext = oCalendarRow.getBindingContext(),
				handleAppointmentDropBetweenRows = function () {
					var aPath = oAppBindingContext.getPath().split("/"),
						iIndex = aPath.pop(),
						sRowAppointmentsPath = aPath.join("/");

					oRowBindingContext.getObject().appointments.push(
						oModel.getProperty(oAppBindingContext.getPath())
					);

					oModel.getProperty(sRowAppointmentsPath).splice(iIndex, 1);
				};

			if (bCopy) { // "copy" appointment
				var oProps = jQuery.extend({}, oModel.getProperty(oAppointment.getBindingContext().getPath()));
				oProps.start = oStartDate;
				oProps.end = oEndDate;

				oRowBindingContext.getObject().appointments.push(oProps);
			} else { // "move" appointment
				oModel.setProperty("start", oStartDate, oAppBindingContext);
				oModel.setProperty("end", oEndDate, oAppBindingContext);

				if (oAppointment.getParent() !== oCalendarRow) {
					handleAppointmentDropBetweenRows();
				}
			}

			oModel.refresh(true);

			MessageToast.show(oCalendarRow.getTitle() + "'s '" + "Appointment '" + oAppointment.getTitle() + "' now starts at \n" + oStartDate +
				"\n and end at \n" + oEndDate + ".");
		},

		handleAppointmentResize: function (oEvent) {
			var oAppointment = oEvent.getParameter("appointment"),
				oStartDate = oEvent.getParameter("startDate"),
				oEndDate = oEvent.getParameter("endDate");

			if (!that.isAppointmentOverlap(oEvent, oAppointment.getParent())) {
				MessageToast.show("Appointment '" + oAppointment.getTitle() + "' now starts at \n" + oStartDate + "\n and end at \n" + oEndDate +
					".");

				oAppointment
					.setStartDate(oStartDate)
					.setEndDate(oEndDate);
			} else {
				MessageToast.show("As a manager you can not resize events if they overlap with another events");
			}
		},

		isAppointmentOverlap: function (oEvent, oCalendarRow) {
			var oAppointment = oEvent.getParameter("appointment"),
				oStartDate = oEvent.getParameter("startDate"),
				oEndDate = oEvent.getParameter("endDate"),
				bAppointmentOverlapped;

			if (that.getUserRole() === that.roles.manager) {
				bAppointmentOverlapped = oCalendarRow.getAppointments().some(function (oCurrentAppointment) {
					if (oCurrentAppointment === oAppointment) {
						return;
					}

					var oAppStartTime = oCurrentAppointment.getStartDate().getTime(),
						oAppEndTime = oCurrentAppointment.getEndDate().getTime();

					if (oAppStartTime <= oStartDate.getTime() && oStartDate.getTime() < oAppEndTime) {
						return true;
					}

					if (oAppStartTime < oEndDate.getTime() && oEndDate.getTime() <= oAppEndTime) {
						return true;
					}

					if (oStartDate.getTime() <= oAppStartTime && oAppStartTime < oEndDate.getTime()) {
						return true;
					}
				});
			}

			return bAppointmentOverlapped;
		},
		handleAppointmentCreate: function () {
			that._createInitialDialogValues(sap.ui.getCore().byId("pc1").getStartDate());
		},
		_createInitialDialogValues: function (oDate) {
			//	MessageToast.show("As a manager you can not resize events if they overlap with another events");
			var oStartDate = new Date(oDate),
				oEndDate = new Date(oStartDate);

			oStartDate.setHours(this._getDefaultAppointmentStartHour());
			oEndDate.setHours(this._getDefaultAppointmentEndHour());
			this._oChosenDayData = {
				start: oStartDate,
				end: oEndDate
			};
			this.sPath = null;

			this._arrangeDialogFragment("Create appointment");
		},
		handleEditButton: function () {
			// The sap.m.Popover has to be closed before the sap.m.Dialog gets opened
			this._oDetailsPopover.close();
			this.sPath = this._oDetailsPopover.getBindingContext().getPath();
			this._arrangeDialogFragment("Edit appointment");
		},
		_arrangeDialogFragment: function (sTitle) {
			if (!this._oNewAppointmentDialog) {
				Fragment.load({
						id: "dialogFrag",
						name: "PlanningCalendar.PlanningCalendar.view.Modify",     
						controller: this,
						type: "JS"
					})
					.then(function (oDialog) {
						this._oNewAppointmentDialog = oDialog;
						this.getView().addDependent(this._oNewAppointmentDialog);
						this._arrangeDialog(sTitle);
					}.bind(this));
			} else {
				this._arrangeDialog(sTitle);
			}
		},
		_arrangeDialog: function (sTitle) {
			this._setValuesToDialogContent();
			this._oNewAppointmentDialog.setTitle(sTitle);
			this._oNewAppointmentDialog.open();
		},
		_setValuesToDialogContent: function () {
			var oAllDayAppointment = (Fragment.byId("dialogFrag", "allDay")),
				sStartDatePickerID = oAllDayAppointment.getSelected() ? "DPStartDate" : "DTPStartDate",
				sEndDatePickerID = oAllDayAppointment.getSelected() ? "DPEndDate" : "DTPEndDate",
				oTitleControl = Fragment.byId("dialogFrag", "appTitle"),
				oTextControl = Fragment.byId("dialogFrag", "moreInfo"),
				oTypeControl = Fragment.byId("dialogFrag", "appType"),
				oStartDateControl = Fragment.byId("dialogFrag", sStartDatePickerID),
				oEndDateControl = Fragment.byId("dialogFrag", sEndDatePickerID),
				oEmptyError = {
					errorState: false,
					errorMessage: ""
				},
				oContext,
				oContextObject,
				oSPCStartDate,
				sTitle,
				sText,
				oStartDate,
				oEndDate,
				sType;

			if (this.sPath) {
				oContext = this._oDetailsPopover.getBindingContext();
				oContextObject = oContext.getObject();
				sTitle = oContextObject.title;
				sText = oContextObject.text;
				oStartDate = oContextObject.startDate;
				oEndDate = oContextObject.endDate;
				sType = oContextObject.type;
			} else {
				sTitle = "";
				sText = "";
				if (this._oChosenDayData) {
					oStartDate = this._oChosenDayData.start;
					oEndDate = this._oChosenDayData.end;

					delete this._oChosenDayData;
				} else {
					oSPCStartDate = this.getView().byId("SPC1").getStartDate();
					oStartDate = new Date(oSPCStartDate);
					oStartDate.setHours(this._getDefaultAppointmentStartHour());
					oEndDate = new Date(oSPCStartDate);
					oEndDate.setHours(this._getDefaultAppointmentEndHour());
				}
				oAllDayAppointment.setSelected(false);
				sType = "Type01";
			}

			oTitleControl.setValue(sTitle);
			oTextControl.setValue(sText);
			oStartDateControl.setDateValue(oStartDate);
			oEndDateControl.setDateValue(oEndDate);
			oTypeControl.setSelectedKey(sType);
			this._setDateValueState(oStartDateControl, oEmptyError);
			this._setDateValueState(oEndDateControl, oEmptyError);
			this.updateButtonEnabledState(oStartDateControl, oEndDateControl, this._oNewAppointmentDialog.getBeginButton());
		},
		handleDialogOkButton: function () {
			var bAllDayAppointment = (Fragment.byId("dialogFrag", "allDay")).getSelected(),
				sStartDate = bAllDayAppointment ? "DPStartDate" : "DTPStartDate",
				sEndDate = bAllDayAppointment ? "DPEndDate" : "DTPEndDate",
				sTitle = Fragment.byId("dialogFrag", "appTitle").getValue(),
				sText = Fragment.byId("dialogFrag", "moreInfo").getValue(),
				sType = Fragment.byId("dialogFrag", "appType").getSelectedItem().getKey(),
				oStartDate = Fragment.byId("dialogFrag", sStartDate).getDateValue(),
				oEndDate = Fragment.byId("dialogFrag", sEndDate).getDateValue(),
				oModel = this.getView().getModel(),
				sAppointmentPath;

			if (Fragment.byId("dialogFrag", sStartDate).getValueState() !== "Error" && Fragment.byId("dialogFrag", sEndDate).getValueState() !==
				"Error") {

				if (that.sPath) {
					sAppointmentPath = that.sPath;
						MessageToast.show(sAppointmentPath);
					oModel.setProperty(sAppointmentPath + "/title", sTitle);
					oModel.setProperty(sAppointmentPath + "/info", sText);
					oModel.setProperty(sAppointmentPath + "/type", sType);
					oModel.setProperty(sAppointmentPath + "/startDate", oStartDate);
					oModel.setProperty(sAppointmentPath + "/endDate", oEndDate);
				} else {
					MessageToast.show(oModel.getData());
					oModel.getData().appointments.push({
						title: sTitle,
						info: sText,
						type: sType,
						startDate: oStartDate,
						endDate: oEndDate
					});
				}

				oModel.updateBindings();

				this._oNewAppointmentDialog.close();
			}
		},
		_getDefaultAppointmentStartHour: function() {
			return 9;
		},

		_getDefaultAppointmentEndHour: function() {
			return 10;
		},
		_setDateValueState: function(oPicker, oErrorState) {
			if (oErrorState.errorState) {
				oPicker.setValueState("Error");
				oPicker.setValueStateText(oErrorState.errorMessage);
			} else {
				oPicker.setValueState("None");
			}
		},
		updateButtonEnabledState: function (oDateTimePickerStart, oDateTimePickerEnd, oButton) {
			var bEnabled = oDateTimePickerStart.getValueState() !== "Error"
				&& oDateTimePickerStart.getValue() !== ""
				&& oDateTimePickerEnd.getValue() !== ""
				&& oDateTimePickerEnd.getValueState() !== "Error";

			oButton.setEnabled(bEnabled);
		},
		handleDateTimePickerChange: function(oEvent) {
			var oDateTimePickerStart = Fragment.byId("dialogFrag", "DTPStartDate"),
				oDateTimePickerEnd = Fragment.byId("dialogFrag", "DTPEndDate"),
				oStartDate = oDateTimePickerStart.getDateValue(),
				oEndDate = oDateTimePickerEnd.getDateValue(),
				oErrorState = {errorState: false, errorMessage: ""};

			if (!oStartDate){
				oErrorState.errorState = true;
				oErrorState.errorMessage = "Please pick a date";
				this._setDateValueState(oDateTimePickerStart, oErrorState);
			} else if (!oEndDate){
				oErrorState.errorState = true;
				oErrorState.errorMessage = "Please pick a date";
				this._setDateValueState(oDateTimePickerEnd, oErrorState);
			} else if (!oEvent.getParameter("valid")){
				oErrorState.errorState = true;
				oErrorState.errorMessage = "Ivalid date";
				if (oEvent.oSource.sId === oDateTimePickerStart.sId){
					this._setDateValueState(oDateTimePickerStart, oErrorState);
				} else {
					this._setDateValueState(oDateTimePickerEnd, oErrorState);
				}
			} else if (oStartDate && oEndDate && (oEndDate.getTime() <= oStartDate.getTime())){
				oErrorState.errorState = true;
				oErrorState.errorMessage = "Start date should be before End date";
				this._setDateValueState(oDateTimePickerStart, oErrorState);
				this._setDateValueState(oDateTimePickerEnd, oErrorState);
			} else {
				this._setDateValueState(oDateTimePickerStart, oErrorState);
				this._setDateValueState(oDateTimePickerEnd, oErrorState);
			}

			this.updateButtonEnabledState(oDateTimePickerStart, oDateTimePickerEnd, this._oNewAppointmentDialog.getBeginButton());
		},

		handleDatePickerChange: function () {
			var oDatePickerStart = Fragment.byId("dialogFrag", "DPStartDate"),
				oDatePickerEnd = Fragment.byId("dialogFrag", "DPEndDate"),
				oStartDate = oDatePickerStart.getDateValue(),
				oEndDate = oDatePickerEnd.getDateValue(),
				bEndDateBiggerThanStartDate = oEndDate.getTime() <= oStartDate.getTime(),
				oErrorState = {errorState: false, errorMessage: ""};

			if (oStartDate && oEndDate && bEndDateBiggerThanStartDate){
				oErrorState.errorState = true;
				oErrorState.errorMessage = "Start date should be before End date";
			}
			this._setDateValueState(oDatePickerStart, oErrorState);
			this._setDateValueState(oDatePickerEnd, oErrorState);
			this.updateButtonEnabledState(oDatePickerStart, oDatePickerEnd, this._oNewAppointmentDialog.getBeginButton());
		},
			handleOpenLegend: function (oEvent) {
			var oSource = oEvent.getSource();

			if (!this._oLegendPopover) {
				Fragment.load({
					id: "LegendFrag",
					name: "sap.m.sample.SinglePlanningCalendar.Legend",
					controller: this
				}).then(function(oPopoverContent){
					this._oLegendPopover = oPopoverContent;
					this.getView().addDependent(this._oLegendPopover);
					this._oLegendPopover.openBy(oSource);
				}.bind(this));
			} else if (this._oLegendPopover.isOpen()) {
				this._oLegendPopover.close();
			} else {
				this._oLegendPopover.openBy(oSource);
			}
		},
		handleDialogCancelButton:  function () {
			this.sPath = null;
			this._oNewAppointmentDialog.close();
		},
		onAppointmentSelect: function (oEvent){
		
				var oAppointment = oEvent.getParameter("appointment"),
				oStartDate,
				oEndDate,
				oTrimmedStartDate,
				oTrimmedEndDate,
				bAllDate,
				oModel;

			if (oAppointment === undefined) {
				return;
			}

			oStartDate = oAppointment.getStartDate();
			oEndDate = oAppointment.getEndDate();
			oTrimmedStartDate = new Date(oStartDate);
			oTrimmedEndDate = new Date(oEndDate);
			bAllDate = false;
			oModel = 	that.getView().getModel("allDay");

			if (!oAppointment.getSelected()) {
				this._oDetailsPopover.close();
				return;
			}

			that._setHoursToZero(oTrimmedStartDate);
			that._setHoursToZero(oTrimmedEndDate);

			if (oStartDate.getTime() === oTrimmedStartDate.getTime() && oEndDate.getTime() === oTrimmedEndDate.getTime()) {
				bAllDate = true;
			}

			oModel.getData().allDay = bAllDate;
			oModel.updateBindings();

			if (!this._oDetailsPopover) {
				Fragment.load({
					id: "popoverFrag",
					name: "PlanningCalendar.PlanningCalendar.view.Details",
					controller: this
				})
					.then(function(oPopoverContent){
						this._oDetailsPopover = oPopoverContent;
						this._oDetailsPopover.setBindingContext(oAppointment.getBindingContext());
						this.getView().addDependent(this._oDetailsPopover);
						this._oDetailsPopover.openBy(oAppointment);
					}.bind(this));
			} else {
				this._oDetailsPopover.setBindingContext(oAppointment.getBindingContext());
				this._oDetailsPopover.openBy(oAppointment);
			}
		},
			_setHoursToZero: function (oDate) {
			oDate.setHours(0, 0, 0, 0);
		}


	
	});
});