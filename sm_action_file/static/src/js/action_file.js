odoo.define('sm_action_file.action_file', function (require) {
"use strict";

var core = require('web.core');
var framework = require('web.framework');
var session = require('web.session');

function fileDownloadActionHandler(parent, action) {
    var params = action.params || {};
    var model = params.model || "ir.attachment";
    var field = params.field || "datas";
    var id = params.id;
    var filename = params.filename || "";
    var filename_field = params.filename_field || "";
    var downloadParam = params.download !== undefined ? params.download : true;

    framework.blockUI();
    session.get_file({
        url: '/web/content',
        data: {
            model: model,
            id: id,
            field: field,
            filename_field: filename_field,
            filename: filename,
            download: downloadParam,
        },
        complete: framework.unblockUI,
        error: function () {
            framework.unblockUI();
        }
    });
}

core.action_registry.add('file_download', fileDownloadActionHandler);

return fileDownloadActionHandler;
});
