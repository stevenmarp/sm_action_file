===========================
Client Action File Download
===========================

Triggers File Download from Server Action
=========================================

This module allows developers to trigger a file download from backend server actions, Python methods, or buttons.

Description
===========
Odoo backend actions normally require opening new browser tabs or wizard forms to download files.
This module registers a client action handler (``file_download``) that triggers a direct asynchronous download of the target file via JavaScript, maintaining a seamless user experience.

Views / Web Assets
==================
* Registers ``file_download`` client action in Odoo's actions registry.
* Injected into ``web.assets_backend``.

Dependencies
============
* ``web``

Demonstration / Sample Code
===========================

Attachment Record
-----------------
To download an ``ir.attachment`` record, return the client action with the attachment's database ID:

.. code-block:: python

    action = {
        'type': 'ir.actions.client',
        'tag': 'file_download',
        'params': {
            'id': attachment.id,
            'download': True
        }
    }

Other Binary Field
------------------
To download a binary field from a specific model/record, pass the model name, field name, record ID, and filename details:

.. code-block:: python

    action = {
        'type': 'ir.actions.client',
        'tag': 'file_download',
        'params': {
            'model': self._name,
            'field': 'datas',
            'id': self.id,
            'filename': self.filename,
            'filename_field': 'filename',
            'download': True
        }
    }
