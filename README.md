# Client Action File Download for Odoo 18

![Banner](sm_action_file/static/description/banner.gif)

[![Odoo 18](https://img.shields.io/badge/Odoo-18.0-purple)](https://www.odoo.com)
[![License: OPL-1](https://img.shields.io/badge/License-OPL--1-red)](https://www.odoo.com)
[![Version](https://img.shields.io/badge/version-18.0.1.0.0-blue)](https://github.com/stevenmarp/sm_action_file)

Allows Odoo developers to trigger file downloads directly from python backend methods, server actions, or buttons by returning a client action without opening new tabs or reloads.

## ✨ Features

- **Seamless UX**: No annoying empty browser tabs left open, and no page reloads that reset the user interface state.
- **No Popup Wizards**: Trigger downloads with a single click. No need to build temporary transient model wizards with download links.
- **Standard & Custom fields**: Supports both standard `ir.attachment` records and any custom binary fields on your custom models.

## 🔧 Installation

1. Copy the `sm_action_file` folder to your Odoo addons directory.
2. Update the addons list in Odoo.
3. Install the module from the Apps menu.

## 🚀 Usage Examples

Simply return the action dictionary from your Python method:

### 1. Download an Attachment Record

```python
return {
    'type': 'ir.actions.client',
    'tag': 'file_download',
    'params': {
        'id': attachment.id,
        'download': True
    }
}
```

### 2. Download from a Binary Field

```python
return {
    'type': 'ir.actions.client',
    'tag': 'file_download',
    'params': {
        'model': self._name,
        'field': 'datas',
        'id': self.id,
        'filename': 'myfile.csv',
        'download': True
    }
}
```

## 👥 Credits

### Authors
- **Steven Marp**

---

<div align="center">
<strong>Made with ❤️ by Stevenmarp</strong>
</div>
