# Regional Asset Architecture v1

- Permanent artwork lives in `public/maps/` and is referenced by a lightweight path.
- `Preview Local Image` uses a temporary object URL and is never written to localStorage.
- `Set Project Asset Path` connects a region to an approved GitHub asset.
- Regional canvases adopt each image's natural aspect ratio.
- JSON and localStorage contain configuration rather than embedded image data.

Cloud Kingdom example: upload `public/maps/cloud-kingdom.jpg`, then set `./public/maps/cloud-kingdom.jpg` as the project asset path.
