// Stores the currently-being-typechecked object for error messages.
let obj: any = null;
export class WatsonDataProxy {
  public readonly matching_results: number;
  public readonly results: ResultsEntityProxy[] | null;
  public static Parse(d: string): WatsonDataProxy {
    return WatsonDataProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): WatsonDataProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.matching_results, false, field + ".matching_results");
    checkArray(d.results, field + ".results");
    if (d.results) {
      for (let i = 0; i < d.results.length; i++) {
        d.results[i] = ResultsEntityProxy.Create(d.results[i], field + ".results" + "[" + i + "]");
      }
    }
    if (d.results === undefined) {
      d.results = null;
    }
    return new WatsonDataProxy(d);
  }
  private constructor(d: any) {
    this.matching_results = d.matching_results;
    this.results = d.results;
  }
}

export class ResultsEntityProxy {
  public readonly id: string;
  public readonly score: number;
  public readonly enriched_title: EnrichedTitleProxy;
  public readonly crawl_date: string;
  public readonly url: string;
  public readonly host: string;
  public readonly text: string;
  public readonly main_image_url: string | null;
  public readonly country: string;
  public readonly source_type: string;
  public readonly language: string;
  public readonly publication_date: string;
  public readonly enriched_text: EnrichedTextProxy;
  public readonly extracted_metadata: ExtractedMetadataProxy;
  public readonly title: string;
  public readonly forum_title: string | null;
  public readonly author: string | null;
  public static Parse(d: string): ResultsEntityProxy {
    return ResultsEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ResultsEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.id, false, field + ".id");
    checkNumber(d.score, false, field + ".score");
    d.enriched_title = EnrichedTitleProxy.Create(d.enriched_title, field + ".enriched_title");
    checkString(d.crawl_date, false, field + ".crawl_date");
    checkString(d.url, false, field + ".url");
    checkString(d.host, false, field + ".host");
    checkString(d.text, false, field + ".text");
    checkString(d.main_image_url, true, field + ".main_image_url");
    if (d.main_image_url === undefined) {
      d.main_image_url = null;
    }
    checkString(d.country, false, field + ".country");
    checkString(d.source_type, false, field + ".source_type");
    checkString(d.language, false, field + ".language");
    checkString(d.publication_date, false, field + ".publication_date");
    d.enriched_text = EnrichedTextProxy.Create(d.enriched_text, field + ".enriched_text");
    d.extracted_metadata = ExtractedMetadataProxy.Create(d.extracted_metadata, field + ".extracted_metadata");
    checkString(d.title, false, field + ".title");
    checkString(d.forum_title, true, field + ".forum_title");
    if (d.forum_title === undefined) {
      d.forum_title = null;
    }
    checkString(d.author, true, field + ".author");
    if (d.author === undefined) {
      d.author = null;
    }
    return new ResultsEntityProxy(d);
  }
  private constructor(d: any) {
    this.id = d.id;
    this.score = d.score;
    this.enriched_title = d.enriched_title;
    this.crawl_date = d.crawl_date;
    this.url = d.url;
    this.host = d.host;
    this.text = d.text;
    this.main_image_url = d.main_image_url;
    this.country = d.country;
    this.source_type = d.source_type;
    this.language = d.language;
    this.publication_date = d.publication_date;
    this.enriched_text = d.enriched_text;
    this.extracted_metadata = d.extracted_metadata;
    this.title = d.title;
    this.forum_title = d.forum_title;
    this.author = d.author;
  }
}

export class EnrichedTitleProxy {
  public readonly entities: (EntitiesEntityProxy | null)[] | null;
  public readonly sentiment: SentimentProxy;
  public readonly semantic_roles: (SemanticRolesEntityProxy | null)[] | null;
  public readonly concepts: (ConceptsEntityProxy | null)[] | null;
  public readonly categories: SentimentOrDocumentOrCategoriesEntityProxy[] | null;
  public readonly relations: (RelationsEntityProxy | null)[] | null;
  public readonly keywords: KeywordsEntityProxy[] | null;
  public static Parse(d: string): EnrichedTitleProxy {
    return EnrichedTitleProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): EnrichedTitleProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkArray(d.entities, field + ".entities");
    if (d.entities) {
      for (let i = 0; i < d.entities.length; i++) {
        d.entities[i] = EntitiesEntityProxy.Create(d.entities[i], field + ".entities" + "[" + i + "]");
        if (d.entities[i] === undefined) {
          d.entities[i] = null;
        }
      }
    }
    if (d.entities === undefined) {
      d.entities = null;
    }
    d.sentiment = SentimentProxy.Create(d.sentiment, field + ".sentiment");
    checkArray(d.semantic_roles, field + ".semantic_roles");
    if (d.semantic_roles) {
      for (let i = 0; i < d.semantic_roles.length; i++) {
        d.semantic_roles[i] = SemanticRolesEntityProxy.Create(d.semantic_roles[i], field + ".semantic_roles" + "[" + i + "]");
        if (d.semantic_roles[i] === undefined) {
          d.semantic_roles[i] = null;
        }
      }
    }
    if (d.semantic_roles === undefined) {
      d.semantic_roles = null;
    }
    checkArray(d.concepts, field + ".concepts");
    if (d.concepts) {
      for (let i = 0; i < d.concepts.length; i++) {
        d.concepts[i] = ConceptsEntityProxy.Create(d.concepts[i], field + ".concepts" + "[" + i + "]");
        if (d.concepts[i] === undefined) {
          d.concepts[i] = null;
        }
      }
    }
    if (d.concepts === undefined) {
      d.concepts = null;
    }
    checkArray(d.categories, field + ".categories");
    if (d.categories) {
      for (let i = 0; i < d.categories.length; i++) {
        d.categories[i] = SentimentOrDocumentOrCategoriesEntityProxy.Create(d.categories[i], field + ".categories" + "[" + i + "]");
      }
    }
    if (d.categories === undefined) {
      d.categories = null;
    }
    checkArray(d.relations, field + ".relations");
    if (d.relations) {
      for (let i = 0; i < d.relations.length; i++) {
        d.relations[i] = RelationsEntityProxy.Create(d.relations[i], field + ".relations" + "[" + i + "]");
        if (d.relations[i] === undefined) {
          d.relations[i] = null;
        }
      }
    }
    if (d.relations === undefined) {
      d.relations = null;
    }
    checkArray(d.keywords, field + ".keywords");
    if (d.keywords) {
      for (let i = 0; i < d.keywords.length; i++) {
        d.keywords[i] = KeywordsEntityProxy.Create(d.keywords[i], field + ".keywords" + "[" + i + "]");
      }
    }
    if (d.keywords === undefined) {
      d.keywords = null;
    }
    return new EnrichedTitleProxy(d);
  }
  private constructor(d: any) {
    this.entities = d.entities;
    this.sentiment = d.sentiment;
    this.semantic_roles = d.semantic_roles;
    this.concepts = d.concepts;
    this.categories = d.categories;
    this.relations = d.relations;
    this.keywords = d.keywords;
  }
}

export class EntitiesEntityProxy {
  public readonly count: number;
  public readonly sentiment: SentimentOrDocumentOrCategoriesEntityProxy;
  public readonly text: string;
  public readonly relevance: number;
  public readonly type: string;
  public readonly disambiguation: DisambiguationProxy | null;
  public static Parse(d: string): EntitiesEntityProxy | null {
    return EntitiesEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): EntitiesEntityProxy | null {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    checkNumber(d.count, false, field + ".count");
    d.sentiment = SentimentOrDocumentOrCategoriesEntityProxy.Create(d.sentiment, field + ".sentiment");
    checkString(d.text, false, field + ".text");
    checkNumber(d.relevance, false, field + ".relevance");
    checkString(d.type, false, field + ".type");
    d.disambiguation = DisambiguationProxy.Create(d.disambiguation, field + ".disambiguation");
    if (d.disambiguation === undefined) {
      d.disambiguation = null;
    }
    return new EntitiesEntityProxy(d);
  }
  private constructor(d: any) {
    this.count = d.count;
    this.sentiment = d.sentiment;
    this.text = d.text;
    this.relevance = d.relevance;
    this.type = d.type;
    this.disambiguation = d.disambiguation;
  }
}

export class SentimentOrDocumentOrCategoriesEntityProxy {
  public readonly score: number;
  public readonly label: string;
  public static Parse(d: string): SentimentOrDocumentOrCategoriesEntityProxy {
    return SentimentOrDocumentOrCategoriesEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): SentimentOrDocumentOrCategoriesEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.score, false, field + ".score");
    checkString(d.label, false, field + ".label");
    return new SentimentOrDocumentOrCategoriesEntityProxy(d);
  }
  private constructor(d: any) {
    this.score = d.score;
    this.label = d.label;
  }
}

export class DisambiguationProxy {
  public readonly subtype: string[] | null;
  public static Parse(d: string): DisambiguationProxy | null {
    return DisambiguationProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): DisambiguationProxy | null {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    checkArray(d.subtype, field + ".subtype");
    if (d.subtype) {
      for (let i = 0; i < d.subtype.length; i++) {
        checkString(d.subtype[i], false, field + ".subtype" + "[" + i + "]");
      }
    }
    if (d.subtype === undefined) {
      d.subtype = null;
    }
    return new DisambiguationProxy(d);
  }
  private constructor(d: any) {
    this.subtype = d.subtype;
  }
}

export class SentimentProxy {
  public readonly document: SentimentOrDocumentOrCategoriesEntityProxy;
  public static Parse(d: string): SentimentProxy {
    return SentimentProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): SentimentProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.document = SentimentOrDocumentOrCategoriesEntityProxy.Create(d.document, field + ".document");
    return new SentimentProxy(d);
  }
  private constructor(d: any) {
    this.document = d.document;
  }
}

export class SemanticRolesEntityProxy {
  public readonly subject: SubjectOrObjectProxy;
  public readonly sentence: string;
  public readonly object: SubjectOrObjectProxy;
  public readonly action: ActionProxy;
  public static Parse(d: string): SemanticRolesEntityProxy | null {
    return SemanticRolesEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): SemanticRolesEntityProxy | null {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    d.subject = SubjectOrObjectProxy.Create(d.subject, field + ".subject");
    checkString(d.sentence, false, field + ".sentence");
    d.object = SubjectOrObjectProxy.Create(d.object, field + ".object");
    d.action = ActionProxy.Create(d.action, field + ".action");
    return new SemanticRolesEntityProxy(d);
  }
  private constructor(d: any) {
    this.subject = d.subject;
    this.sentence = d.sentence;
    this.object = d.object;
    this.action = d.action;
  }
}

export class SubjectOrObjectProxy {
  public readonly text: string;
  public readonly keywords: KeywordsEntityOrSubjectOrObjectProxy[] | null;
  public static Parse(d: string): SubjectOrObjectProxy {
    return SubjectOrObjectProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): SubjectOrObjectProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.text, false, field + ".text");
    checkArray(d.keywords, field + ".keywords");
    if (d.keywords) {
      for (let i = 0; i < d.keywords.length; i++) {
        d.keywords[i] = KeywordsEntityOrSubjectOrObjectProxy.Create(d.keywords[i], field + ".keywords" + "[" + i + "]");
      }
    }
    if (d.keywords === undefined) {
      d.keywords = null;
    }
    return new SubjectOrObjectProxy(d);
  }
  private constructor(d: any) {
    this.text = d.text;
    this.keywords = d.keywords;
  }
}

export class KeywordsEntityOrSubjectOrObjectProxy {
  public readonly text: string;
  public static Parse(d: string): KeywordsEntityOrSubjectOrObjectProxy {
    return KeywordsEntityOrSubjectOrObjectProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): KeywordsEntityOrSubjectOrObjectProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.text, false, field + ".text");
    return new KeywordsEntityOrSubjectOrObjectProxy(d);
  }
  private constructor(d: any) {
    this.text = d.text;
  }
}

export class ActionProxy {
  public readonly verb: VerbProxy;
  public readonly text: string;
  public readonly normalized: string;
  public static Parse(d: string): ActionProxy {
    return ActionProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ActionProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.verb = VerbProxy.Create(d.verb, field + ".verb");
    checkString(d.text, false, field + ".text");
    checkString(d.normalized, false, field + ".normalized");
    return new ActionProxy(d);
  }
  private constructor(d: any) {
    this.verb = d.verb;
    this.text = d.text;
    this.normalized = d.normalized;
  }
}

export class VerbProxy {
  public readonly text: string;
  public readonly tense: string;
  public readonly negated: boolean | null;
  public static Parse(d: string): VerbProxy {
    return VerbProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): VerbProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.text, false, field + ".text");
    checkString(d.tense, false, field + ".tense");
    checkBoolean(d.negated, true, field + ".negated");
    if (d.negated === undefined) {
      d.negated = null;
    }
    return new VerbProxy(d);
  }
  private constructor(d: any) {
    this.text = d.text;
    this.tense = d.tense;
    this.negated = d.negated;
  }
}

export class ConceptsEntityProxy {
  public readonly text: string;
  public readonly relevance: number;
  public readonly dbpedia_resource: string;
  public static Parse(d: string): ConceptsEntityProxy | null {
    return ConceptsEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ConceptsEntityProxy | null {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    checkString(d.text, false, field + ".text");
    checkNumber(d.relevance, false, field + ".relevance");
    checkString(d.dbpedia_resource, false, field + ".dbpedia_resource");
    return new ConceptsEntityProxy(d);
  }
  private constructor(d: any) {
    this.text = d.text;
    this.relevance = d.relevance;
    this.dbpedia_resource = d.dbpedia_resource;
  }
}

export class RelationsEntityProxy {
  public readonly type: string;
  public readonly sentence: string;
  public readonly score: number;
  public readonly arguments: ArgumentsEntityProxy[] | null;
  public static Parse(d: string): RelationsEntityProxy | null {
    return RelationsEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): RelationsEntityProxy | null {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    checkString(d.type, false, field + ".type");
    checkString(d.sentence, false, field + ".sentence");
    checkNumber(d.score, false, field + ".score");
    checkArray(d.arguments, field + ".arguments");
    if (d.arguments) {
      for (let i = 0; i < d.arguments.length; i++) {
        d.arguments[i] = ArgumentsEntityProxy.Create(d.arguments[i], field + ".arguments" + "[" + i + "]");
      }
    }
    if (d.arguments === undefined) {
      d.arguments = null;
    }
    return new RelationsEntityProxy(d);
  }
  private constructor(d: any) {
    this.type = d.type;
    this.sentence = d.sentence;
    this.score = d.score;
    this.arguments = d.arguments;
  }
}

export class ArgumentsEntityProxy {
  public readonly text: string;
  public readonly location: number[] | null;
  public readonly entities: EntitiesEntity1Proxy[] | null;
  public static Parse(d: string): ArgumentsEntityProxy {
    return ArgumentsEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ArgumentsEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.text, false, field + ".text");
    checkArray(d.location, field + ".location");
    if (d.location) {
      for (let i = 0; i < d.location.length; i++) {
        checkNumber(d.location[i], false, field + ".location" + "[" + i + "]");
      }
    }
    if (d.location === undefined) {
      d.location = null;
    }
    checkArray(d.entities, field + ".entities");
    if (d.entities) {
      for (let i = 0; i < d.entities.length; i++) {
        d.entities[i] = EntitiesEntity1Proxy.Create(d.entities[i], field + ".entities" + "[" + i + "]");
      }
    }
    if (d.entities === undefined) {
      d.entities = null;
    }
    return new ArgumentsEntityProxy(d);
  }
  private constructor(d: any) {
    this.text = d.text;
    this.location = d.location;
    this.entities = d.entities;
  }
}

export class EntitiesEntity1Proxy {
  public readonly type: string;
  public readonly text: string;
  public static Parse(d: string): EntitiesEntity1Proxy {
    return EntitiesEntity1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): EntitiesEntity1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.type, false, field + ".type");
    checkString(d.text, false, field + ".text");
    return new EntitiesEntity1Proxy(d);
  }
  private constructor(d: any) {
    this.type = d.type;
    this.text = d.text;
  }
}

export class KeywordsEntityProxy {
  public readonly text: string;
  public readonly sentiment: SentimentOrDocumentOrCategoriesEntityProxy;
  public readonly relevance: number;
  public static Parse(d: string): KeywordsEntityProxy {
    return KeywordsEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): KeywordsEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.text, false, field + ".text");
    d.sentiment = SentimentOrDocumentOrCategoriesEntityProxy.Create(d.sentiment, field + ".sentiment");
    checkNumber(d.relevance, false, field + ".relevance");
    return new KeywordsEntityProxy(d);
  }
  private constructor(d: any) {
    this.text = d.text;
    this.sentiment = d.sentiment;
    this.relevance = d.relevance;
  }
}

export class EnrichedTextProxy {
  public readonly entities: EntitiesEntity2Proxy[] | null;
  public readonly sentiment: SentimentProxy;
  public readonly semantic_roles: SemanticRolesEntity1Proxy[] | null;
  public readonly concepts: ConceptsEntity1Proxy[] | null;
  public readonly categories: SentimentOrDocumentOrCategoriesEntityProxy[] | null;
  public readonly relations: RelationsEntity1Proxy[] | null;
  public readonly keywords: KeywordsEntityProxy[] | null;
  public static Parse(d: string): EnrichedTextProxy {
    return EnrichedTextProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): EnrichedTextProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkArray(d.entities, field + ".entities");
    if (d.entities) {
      for (let i = 0; i < d.entities.length; i++) {
        d.entities[i] = EntitiesEntity2Proxy.Create(d.entities[i], field + ".entities" + "[" + i + "]");
      }
    }
    if (d.entities === undefined) {
      d.entities = null;
    }
    d.sentiment = SentimentProxy.Create(d.sentiment, field + ".sentiment");
    checkArray(d.semantic_roles, field + ".semantic_roles");
    if (d.semantic_roles) {
      for (let i = 0; i < d.semantic_roles.length; i++) {
        d.semantic_roles[i] = SemanticRolesEntity1Proxy.Create(d.semantic_roles[i], field + ".semantic_roles" + "[" + i + "]");
      }
    }
    if (d.semantic_roles === undefined) {
      d.semantic_roles = null;
    }
    checkArray(d.concepts, field + ".concepts");
    if (d.concepts) {
      for (let i = 0; i < d.concepts.length; i++) {
        d.concepts[i] = ConceptsEntity1Proxy.Create(d.concepts[i], field + ".concepts" + "[" + i + "]");
      }
    }
    if (d.concepts === undefined) {
      d.concepts = null;
    }
    checkArray(d.categories, field + ".categories");
    if (d.categories) {
      for (let i = 0; i < d.categories.length; i++) {
        d.categories[i] = SentimentOrDocumentOrCategoriesEntityProxy.Create(d.categories[i], field + ".categories" + "[" + i + "]");
      }
    }
    if (d.categories === undefined) {
      d.categories = null;
    }
    checkArray(d.relations, field + ".relations");
    if (d.relations) {
      for (let i = 0; i < d.relations.length; i++) {
        d.relations[i] = RelationsEntity1Proxy.Create(d.relations[i], field + ".relations" + "[" + i + "]");
      }
    }
    if (d.relations === undefined) {
      d.relations = null;
    }
    checkArray(d.keywords, field + ".keywords");
    if (d.keywords) {
      for (let i = 0; i < d.keywords.length; i++) {
        d.keywords[i] = KeywordsEntityProxy.Create(d.keywords[i], field + ".keywords" + "[" + i + "]");
      }
    }
    if (d.keywords === undefined) {
      d.keywords = null;
    }
    return new EnrichedTextProxy(d);
  }
  private constructor(d: any) {
    this.entities = d.entities;
    this.sentiment = d.sentiment;
    this.semantic_roles = d.semantic_roles;
    this.concepts = d.concepts;
    this.categories = d.categories;
    this.relations = d.relations;
    this.keywords = d.keywords;
  }
}

export class EntitiesEntity2Proxy {
  public readonly count: number;
  public readonly sentiment: SentimentOrDocumentOrCategoriesEntityProxy;
  public readonly text: string;
  public readonly relevance: number;
  public readonly type: string;
  public readonly disambiguation: Disambiguation1Proxy | null;
  public static Parse(d: string): EntitiesEntity2Proxy {
    return EntitiesEntity2Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): EntitiesEntity2Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.count, false, field + ".count");
    d.sentiment = SentimentOrDocumentOrCategoriesEntityProxy.Create(d.sentiment, field + ".sentiment");
    checkString(d.text, false, field + ".text");
    checkNumber(d.relevance, false, field + ".relevance");
    checkString(d.type, false, field + ".type");
    d.disambiguation = Disambiguation1Proxy.Create(d.disambiguation, field + ".disambiguation");
    if (d.disambiguation === undefined) {
      d.disambiguation = null;
    }
    return new EntitiesEntity2Proxy(d);
  }
  private constructor(d: any) {
    this.count = d.count;
    this.sentiment = d.sentiment;
    this.text = d.text;
    this.relevance = d.relevance;
    this.type = d.type;
    this.disambiguation = d.disambiguation;
  }
}

export class Disambiguation1Proxy {
  public readonly subtype: (string | null)[] | null;
  public readonly name: string | null;
  public readonly dbpedia_resource: string | null;
  public static Parse(d: string): Disambiguation1Proxy | null {
    return Disambiguation1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Disambiguation1Proxy | null {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    checkArray(d.subtype, field + ".subtype");
    if (d.subtype) {
      for (let i = 0; i < d.subtype.length; i++) {
        checkString(d.subtype[i], true, field + ".subtype" + "[" + i + "]");
        if (d.subtype[i] === undefined) {
          d.subtype[i] = null;
        }
      }
    }
    if (d.subtype === undefined) {
      d.subtype = null;
    }
    checkString(d.name, true, field + ".name");
    if (d.name === undefined) {
      d.name = null;
    }
    checkString(d.dbpedia_resource, true, field + ".dbpedia_resource");
    if (d.dbpedia_resource === undefined) {
      d.dbpedia_resource = null;
    }
    return new Disambiguation1Proxy(d);
  }
  private constructor(d: any) {
    this.subtype = d.subtype;
    this.name = d.name;
    this.dbpedia_resource = d.dbpedia_resource;
  }
}

export class SemanticRolesEntity1Proxy {
  public readonly subject: SubjectProxy;
  public readonly sentence: string;
  public readonly object: ObjectProxy | null;
  public readonly action: ActionProxy;
  public static Parse(d: string): SemanticRolesEntity1Proxy {
    return SemanticRolesEntity1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): SemanticRolesEntity1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.subject = SubjectProxy.Create(d.subject, field + ".subject");
    checkString(d.sentence, false, field + ".sentence");
    d.object = ObjectProxy.Create(d.object, field + ".object");
    if (d.object === undefined) {
      d.object = null;
    }
    d.action = ActionProxy.Create(d.action, field + ".action");
    return new SemanticRolesEntity1Proxy(d);
  }
  private constructor(d: any) {
    this.subject = d.subject;
    this.sentence = d.sentence;
    this.object = d.object;
    this.action = d.action;
  }
}

export class SubjectProxy {
  public readonly text: string;
  public readonly keywords: KeywordsEntityOrSubjectOrObjectProxy[] | null;
  public readonly entities: (EntitiesEntity3Proxy | null)[] | null;
  public static Parse(d: string): SubjectProxy {
    return SubjectProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): SubjectProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.text, false, field + ".text");
    checkArray(d.keywords, field + ".keywords");
    if (d.keywords) {
      for (let i = 0; i < d.keywords.length; i++) {
        d.keywords[i] = KeywordsEntityOrSubjectOrObjectProxy.Create(d.keywords[i], field + ".keywords" + "[" + i + "]");
      }
    }
    if (d.keywords === undefined) {
      d.keywords = null;
    }
    checkArray(d.entities, field + ".entities");
    if (d.entities) {
      for (let i = 0; i < d.entities.length; i++) {
        d.entities[i] = EntitiesEntity3Proxy.Create(d.entities[i], field + ".entities" + "[" + i + "]");
        if (d.entities[i] === undefined) {
          d.entities[i] = null;
        }
      }
    }
    if (d.entities === undefined) {
      d.entities = null;
    }
    return new SubjectProxy(d);
  }
  private constructor(d: any) {
    this.text = d.text;
    this.keywords = d.keywords;
    this.entities = d.entities;
  }
}

export class EntitiesEntity3Proxy {
  public readonly type: string;
  public readonly text: string;
  public readonly disambiguation: Disambiguation2Proxy | null;
  public static Parse(d: string): EntitiesEntity3Proxy | null {
    return EntitiesEntity3Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): EntitiesEntity3Proxy | null {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    checkString(d.type, false, field + ".type");
    checkString(d.text, false, field + ".text");
    d.disambiguation = Disambiguation2Proxy.Create(d.disambiguation, field + ".disambiguation");
    if (d.disambiguation === undefined) {
      d.disambiguation = null;
    }
    return new EntitiesEntity3Proxy(d);
  }
  private constructor(d: any) {
    this.type = d.type;
    this.text = d.text;
    this.disambiguation = d.disambiguation;
  }
}

export class Disambiguation2Proxy {
  public readonly subtype: (string | null)[] | null;
  public readonly name: string | null;
  public readonly dbpedia_resource: string | null;
  public static Parse(d: string): Disambiguation2Proxy | null {
    return Disambiguation2Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Disambiguation2Proxy | null {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    checkArray(d.subtype, field + ".subtype");
    if (d.subtype) {
      for (let i = 0; i < d.subtype.length; i++) {
        checkString(d.subtype[i], true, field + ".subtype" + "[" + i + "]");
        if (d.subtype[i] === undefined) {
          d.subtype[i] = null;
        }
      }
    }
    if (d.subtype === undefined) {
      d.subtype = null;
    }
    checkString(d.name, true, field + ".name");
    if (d.name === undefined) {
      d.name = null;
    }
    checkString(d.dbpedia_resource, true, field + ".dbpedia_resource");
    if (d.dbpedia_resource === undefined) {
      d.dbpedia_resource = null;
    }
    return new Disambiguation2Proxy(d);
  }
  private constructor(d: any) {
    this.subtype = d.subtype;
    this.name = d.name;
    this.dbpedia_resource = d.dbpedia_resource;
  }
}

export class ObjectProxy {
  public readonly text: string;
  public readonly keywords: KeywordsEntityOrSubjectOrObjectProxy[] | null;
  public readonly entities: (EntitiesEntity4Proxy | null)[] | null;
  public static Parse(d: string): ObjectProxy | null {
    return ObjectProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ObjectProxy | null {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    checkString(d.text, false, field + ".text");
    checkArray(d.keywords, field + ".keywords");
    if (d.keywords) {
      for (let i = 0; i < d.keywords.length; i++) {
        d.keywords[i] = KeywordsEntityOrSubjectOrObjectProxy.Create(d.keywords[i], field + ".keywords" + "[" + i + "]");
      }
    }
    if (d.keywords === undefined) {
      d.keywords = null;
    }
    checkArray(d.entities, field + ".entities");
    if (d.entities) {
      for (let i = 0; i < d.entities.length; i++) {
        d.entities[i] = EntitiesEntity4Proxy.Create(d.entities[i], field + ".entities" + "[" + i + "]");
        if (d.entities[i] === undefined) {
          d.entities[i] = null;
        }
      }
    }
    if (d.entities === undefined) {
      d.entities = null;
    }
    return new ObjectProxy(d);
  }
  private constructor(d: any) {
    this.text = d.text;
    this.keywords = d.keywords;
    this.entities = d.entities;
  }
}

export class EntitiesEntity4Proxy {
  public readonly type: string;
  public readonly text: string;
  public readonly disambiguation: Disambiguation3Proxy | null;
  public static Parse(d: string): EntitiesEntity4Proxy | null {
    return EntitiesEntity4Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): EntitiesEntity4Proxy | null {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    checkString(d.type, false, field + ".type");
    checkString(d.text, false, field + ".text");
    d.disambiguation = Disambiguation3Proxy.Create(d.disambiguation, field + ".disambiguation");
    if (d.disambiguation === undefined) {
      d.disambiguation = null;
    }
    return new EntitiesEntity4Proxy(d);
  }
  private constructor(d: any) {
    this.type = d.type;
    this.text = d.text;
    this.disambiguation = d.disambiguation;
  }
}

export class Disambiguation3Proxy {
  public readonly subtype: string[] | null;
  public readonly name: string | null;
  public readonly dbpedia_resource: string | null;
  public static Parse(d: string): Disambiguation3Proxy | null {
    return Disambiguation3Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Disambiguation3Proxy | null {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    checkArray(d.subtype, field + ".subtype");
    if (d.subtype) {
      for (let i = 0; i < d.subtype.length; i++) {
        checkString(d.subtype[i], false, field + ".subtype" + "[" + i + "]");
      }
    }
    if (d.subtype === undefined) {
      d.subtype = null;
    }
    checkString(d.name, true, field + ".name");
    if (d.name === undefined) {
      d.name = null;
    }
    checkString(d.dbpedia_resource, true, field + ".dbpedia_resource");
    if (d.dbpedia_resource === undefined) {
      d.dbpedia_resource = null;
    }
    return new Disambiguation3Proxy(d);
  }
  private constructor(d: any) {
    this.subtype = d.subtype;
    this.name = d.name;
    this.dbpedia_resource = d.dbpedia_resource;
  }
}

export class ConceptsEntity1Proxy {
  public readonly text: string;
  public readonly relevance: number;
  public readonly dbpedia_resource: string;
  public static Parse(d: string): ConceptsEntity1Proxy {
    return ConceptsEntity1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ConceptsEntity1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.text, false, field + ".text");
    checkNumber(d.relevance, false, field + ".relevance");
    checkString(d.dbpedia_resource, false, field + ".dbpedia_resource");
    return new ConceptsEntity1Proxy(d);
  }
  private constructor(d: any) {
    this.text = d.text;
    this.relevance = d.relevance;
    this.dbpedia_resource = d.dbpedia_resource;
  }
}

export class RelationsEntity1Proxy {
  public readonly type: string;
  public readonly sentence: string;
  public readonly score: number;
  public readonly arguments: ArgumentsEntity1Proxy[] | null;
  public static Parse(d: string): RelationsEntity1Proxy {
    return RelationsEntity1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): RelationsEntity1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.type, false, field + ".type");
    checkString(d.sentence, false, field + ".sentence");
    checkNumber(d.score, false, field + ".score");
    checkArray(d.arguments, field + ".arguments");
    if (d.arguments) {
      for (let i = 0; i < d.arguments.length; i++) {
        d.arguments[i] = ArgumentsEntity1Proxy.Create(d.arguments[i], field + ".arguments" + "[" + i + "]");
      }
    }
    if (d.arguments === undefined) {
      d.arguments = null;
    }
    return new RelationsEntity1Proxy(d);
  }
  private constructor(d: any) {
    this.type = d.type;
    this.sentence = d.sentence;
    this.score = d.score;
    this.arguments = d.arguments;
  }
}

export class ArgumentsEntity1Proxy {
  public readonly text: string;
  public readonly location: number[] | null;
  public readonly entities: EntitiesEntity5Proxy[] | null;
  public static Parse(d: string): ArgumentsEntity1Proxy {
    return ArgumentsEntity1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ArgumentsEntity1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.text, false, field + ".text");
    checkArray(d.location, field + ".location");
    if (d.location) {
      for (let i = 0; i < d.location.length; i++) {
        checkNumber(d.location[i], false, field + ".location" + "[" + i + "]");
      }
    }
    if (d.location === undefined) {
      d.location = null;
    }
    checkArray(d.entities, field + ".entities");
    if (d.entities) {
      for (let i = 0; i < d.entities.length; i++) {
        d.entities[i] = EntitiesEntity5Proxy.Create(d.entities[i], field + ".entities" + "[" + i + "]");
      }
    }
    if (d.entities === undefined) {
      d.entities = null;
    }
    return new ArgumentsEntity1Proxy(d);
  }
  private constructor(d: any) {
    this.text = d.text;
    this.location = d.location;
    this.entities = d.entities;
  }
}

export class EntitiesEntity5Proxy {
  public readonly type: string;
  public readonly text: string;
  public readonly disambiguation: Disambiguation4Proxy | null;
  public static Parse(d: string): EntitiesEntity5Proxy {
    return EntitiesEntity5Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): EntitiesEntity5Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.type, false, field + ".type");
    checkString(d.text, false, field + ".text");
    d.disambiguation = Disambiguation4Proxy.Create(d.disambiguation, field + ".disambiguation");
    if (d.disambiguation === undefined) {
      d.disambiguation = null;
    }
    return new EntitiesEntity5Proxy(d);
  }
  private constructor(d: any) {
    this.type = d.type;
    this.text = d.text;
    this.disambiguation = d.disambiguation;
  }
}

export class Disambiguation4Proxy {
  public readonly subtype: string[] | null;
  public static Parse(d: string): Disambiguation4Proxy | null {
    return Disambiguation4Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Disambiguation4Proxy | null {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    checkArray(d.subtype, field + ".subtype");
    if (d.subtype) {
      for (let i = 0; i < d.subtype.length; i++) {
        checkString(d.subtype[i], false, field + ".subtype" + "[" + i + "]");
      }
    }
    if (d.subtype === undefined) {
      d.subtype = null;
    }
    return new Disambiguation4Proxy(d);
  }
  private constructor(d: any) {
    this.subtype = d.subtype;
  }
}

export class ExtractedMetadataProxy {
  public readonly sha1: string;
  public readonly filename: string;
  public readonly file_type: string;
  public static Parse(d: string): ExtractedMetadataProxy {
    return ExtractedMetadataProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ExtractedMetadataProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.sha1, false, field + ".sha1");
    checkString(d.filename, false, field + ".filename");
    checkString(d.file_type, false, field + ".file_type");
    return new ExtractedMetadataProxy(d);
  }
  private constructor(d: any) {
    this.sha1 = d.sha1;
    this.filename = d.filename;
    this.file_type = d.file_type;
  }
}

function throwNull2NonNull(field: string, d: any): never {
  return errorHelper(field, d, "non-nullable object", false);
}
function throwNotObject(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, "object", nullable);
}
function throwIsArray(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, "object", nullable);
}
function checkArray(d: any, field: string): void {
  if (!Array.isArray(d) && d !== null && d !== undefined) {
    errorHelper(field, d, "array", true);
  }
}
function checkNumber(d: any, nullable: boolean, field: string): void {
  if (typeof(d) !== 'number' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, "number", nullable);
  }
}
function checkBoolean(d: any, nullable: boolean, field: string): void {
  if (typeof(d) !== 'boolean' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, "boolean", nullable);
  }
}
function checkString(d: any, nullable: boolean, field: string): void {
  if (typeof(d) !== 'string' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, "string", nullable);
  }
}
function errorHelper(field: string, d: any, type: string, nullable: boolean): never {
  if (nullable) {
    type += ", null, or undefined";
  }
  throw new TypeError('Expected ' + type + " at " + field + " but found:\n" + JSON.stringify(d) + "\n\nFull object:\n" + JSON.stringify(obj));
}
