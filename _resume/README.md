# Downloadable resume

Edit `resume.html` when updating the downloadable resume. Keep the dates and role descriptions consistent with the website and `llms.txt`.

Rebuild the PDF from the repository root:

```bash
chromium --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="$PWD/assets/emmanuel_cousin_resume.pdf" "file://$PWD/_resume/resume.html"
```

Inspect both pages after rebuilding. Confirm that the extracted text contains no em or en dashes and that no text is cut off.
