import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
    S.list()
        .title('Portfolio')
        .items([
            S.documentTypeListItem('projects').title('Projects'),
            S.documentTypeListItem('skills').title('skills'),
            S.divider(),
            ...S.documentTypeListItems().filter(
                (item) => item.getId() && !['projects','skills'].includes(item.getId()!),
            ),
        ])
