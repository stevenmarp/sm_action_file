import { registry } from "@web/core/registry";
import { download } from "@web/core/network/download";

export function fileDownloadActionHandler(env, action) {
    const params = action.params || {};
    const model = params.model || "ir.attachment";
    const field = params.field || "datas";
    const id = params.id;
    const filename = params.filename || "";
    const filename_field = params.filename_field || "";
    const downloadParam = params.download !== undefined ? params.download : true;

    const downloadData = {
        model: model,
        id: id,
        field: field,
        download: downloadParam,
    };

    if (filename) {
        downloadData.filename = filename;
    }
    if (filename_field) {
        downloadData.filename_field = filename_field;
    }

    download({
        data: downloadData,
        url: "/web/content",
    });
}

registry.category("actions").add("file_download", fileDownloadActionHandler);
