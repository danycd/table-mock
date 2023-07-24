import { Factory } from 'miragejs'
import { faker } from '@faker-js/faker'
import { RulesSeverity, RulesType } from '../../src/lib/services/types';

export const rulesFactory = Factory.extend({
        code: () => faker.string.alphanumeric(5),
        rule: () => faker.commerce.productDescription(),
        type: () => faker.helpers.enumValue(RulesType),
        severity: () => faker.helpers.enumValue(RulesSeverity),
        isActiveSonar: () => faker.datatype.boolean(),
        isActive: () => faker.datatype.boolean(),
        updatedAt: () => faker.date.past(),
        authorEmail: () => faker.internet.email(),
})