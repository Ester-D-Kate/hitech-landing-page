# Asset library

The local working copy preserves every supplied WhatsApp image and video under assets/source/ in its classified folder. Git omits assets/source/reference-only/, which may contain personal information. assets/manifest.json maps the original filenames to descriptions, status categories, public paths, and review notes.

Only review-ready media is copied to public/assets/. Reference-only media stays in assets/source/reference-only/ for local review. That folder may contain personal information, is excluded from Git, and is never copied to public/assets/.

The kitchen rendering is labeled as a generated sample concept. Process videos use native controls and are not autoplayed. Poster frames are generated from the supplied clips and stored under public/assets/process/posters/.

Project stage classifications are based on the supplied photos. Confirm the business's final completed/in-progress status and media permissions before publishing the site publicly.

Posters derived from the process videos are preserved under assets/generated/process-posters/.

## Coverage

- 57 supplied files are catalogued in `assets/manifest.json`.
- 3 brand assets are grouped under `assets/source/brand/`. The website uses the supplied HITECH wordmark at `00.44.50.jpeg`; alternate brand art stays in the brand folder.
- The Projects page shows 51 media items: 5 completed, 24 in progress, 1 generated sample, 11 process images, and 10 demonstration videos. The filters display category counts.
- The promotional banner containing a phone number, the gate photo with a resident name, and a duplicate bathroom image remain archived and are excluded from public pages.
