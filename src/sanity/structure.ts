import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
    S.list()
        .title('Portfolio')
        .items([
            S.documentTypeListItem('projects').title('Projects'),
            S.documentTypeListItem('skills').title('Skills'),
            S.documentTypeListItem('pageContent').title('Page Content'),
            S.divider(),
            ...S.documentTypeListItems().filter(
                (item) => item.getId() && !['projects','skills','pageContent'].includes(item.getId()!),
            ),
        ])
