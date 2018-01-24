export interface WatsonData {
  matching_results: number;
  results?: (ResultsEntity)[] | null;
}
export interface ResultsEntity {
  id: string;
  score: number;
  enriched_title: EnrichedTitle;
  crawl_date: string;
  url: string;
  host: string;
  text: string;
  main_image_url?: string | null;
  country: string;
  source_type: string;
  language: string;
  publication_date: string;
  enriched_text: EnrichedText;
  extracted_metadata: ExtractedMetadata;
  title: string;
  forum_title?: string | null;
  author?: string | null;
}
export interface EnrichedTitle {
  entities?: (EntitiesEntity | null)[] | null;
  sentiment: Sentiment;
  semantic_roles?: (SemanticRolesEntity | null)[] | null;
  concepts?: (ConceptsEntity | null)[] | null;
  categories?: (SentimentOrDocumentOrCategoriesEntity)[] | null;
  relations?: (RelationsEntity | null)[] | null;
  keywords?: (KeywordsEntity)[] | null;
}
export interface EntitiesEntity {
  count: number;
  sentiment: SentimentOrDocumentOrCategoriesEntity;
  text: string;
  relevance: number;
  type: string;
  disambiguation?: Disambiguation | null;
}
export interface SentimentOrDocumentOrCategoriesEntity {
  score: number;
  label: string;
}
export interface Disambiguation {
  subtype?: (string)[] | null;
}
export interface Sentiment {
  document: SentimentOrDocumentOrCategoriesEntity;
}
export interface SemanticRolesEntity {
  subject: SubjectOrObject;
  sentence: string;
  object: SubjectOrObject;
  action: Action;
}
export interface SubjectOrObject {
  text: string;
  keywords?: (KeywordsEntityOrSubjectOrObject)[] | null;
}
export interface KeywordsEntityOrSubjectOrObject {
  text: string;
}
export interface Action {
  verb: Verb;
  text: string;
  normalized: string;
}
export interface Verb {
  text: string;
  tense: string;
  negated?: boolean | null;
}
export interface ConceptsEntity {
  text: string;
  relevance: number;
  dbpedia_resource: string;
}
export interface RelationsEntity {
  type: string;
  sentence: string;
  score: number;
  arguments?: (ArgumentsEntity)[] | null;
}
export interface ArgumentsEntity {
  text: string;
  location?: (number)[] | null;
  entities?: (EntitiesEntity1)[] | null;
}
export interface EntitiesEntity1 {
  type: string;
  text: string;
}
export interface KeywordsEntity {
  text: string;
  sentiment: SentimentOrDocumentOrCategoriesEntity;
  relevance: number;
}
export interface EnrichedText {
  entities?: (EntitiesEntity2)[] | null;
  sentiment: Sentiment;
  semantic_roles?: (SemanticRolesEntity1)[] | null;
  concepts?: (ConceptsEntity1)[] | null;
  categories?: (SentimentOrDocumentOrCategoriesEntity)[] | null;
  relations?: (RelationsEntity1)[] | null;
  keywords?: (KeywordsEntity)[] | null;
}
export interface EntitiesEntity2 {
  count: number;
  sentiment: SentimentOrDocumentOrCategoriesEntity;
  text: string;
  relevance: number;
  type: string;
  disambiguation?: Disambiguation1 | null;
}
export interface Disambiguation1 {
  subtype?: (string | null)[] | null;
  name?: string | null;
  dbpedia_resource?: string | null;
}
export interface SemanticRolesEntity1 {
  subject: Subject;
  sentence: string;
  object?: Object | null;
  action: Action;
}
export interface Subject {
  text: string;
  keywords?: (KeywordsEntityOrSubjectOrObject)[] | null;
  entities?: (EntitiesEntity3 | null)[] | null;
}
export interface EntitiesEntity3 {
  type: string;
  text: string;
  disambiguation?: Disambiguation2 | null;
}
export interface Disambiguation2 {
  subtype?: (string | null)[] | null;
  name?: string | null;
  dbpedia_resource?: string | null;
}
export interface Object {
  text: string;
  keywords?: (KeywordsEntityOrSubjectOrObject)[] | null;
  entities?: (EntitiesEntity4 | null)[] | null;
}
export interface EntitiesEntity4 {
  type: string;
  text: string;
  disambiguation?: Disambiguation3 | null;
}
export interface Disambiguation3 {
  subtype?: (string)[] | null;
  name?: string | null;
  dbpedia_resource?: string | null;
}
export interface ConceptsEntity1 {
  text: string;
  relevance: number;
  dbpedia_resource: string;
}
export interface RelationsEntity1 {
  type: string;
  sentence: string;
  score: number;
  arguments?: (ArgumentsEntity1)[] | null;
}
export interface ArgumentsEntity1 {
  text: string;
  location?: (number)[] | null;
  entities?: (EntitiesEntity5)[] | null;
}
export interface EntitiesEntity5 {
  type: string;
  text: string;
  disambiguation?: Disambiguation4 | null;
}
export interface Disambiguation4 {
  subtype?: (string)[] | null;
}
export interface ExtractedMetadata {
  sha1: string;
  filename: string;
  file_type: string;
}
