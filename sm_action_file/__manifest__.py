# -*- coding: utf-8 -*-
{
    "name": "Client Action File Download",
    "version": "14.0.1.0.0",
    "category": "Extra Tools",
    "summary": "Trigger file downloads directly from server actions and python code",
    "description": """
Client Action File Download
===========================

Allows Odoo developers to trigger file downloads directly from python backend methods,
server actions, or buttons by returning a client action without opening new tabs or reloads.

* Seamless background download without opening blank tabs
* No popup wizards or complex transient models needed
* Supports both standard attachments and custom binary fields
    """,
    'author': 'Steven Marp',
    'website': 'https://apps.odoo.com/apps/modules/browse?author=Steven Marp',
    'license': 'OPL-1',
    "depends": ["web"],
    "data": [
        "views/assets.xml",
    ],
    "installable": True,
    "application": False,
    "auto_install": False,
    "price": 5.00,
    "currency": "USD",
    "images": [
        "static/description/banner.gif"
    ],
}
