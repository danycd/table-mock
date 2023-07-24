export interface Rule{
    code: number;
    rule: string;
    type: RulesType;
    severity: RulesSeverity;
    isActiveSonar: boolean;
    isActive: boolean;
    updatedAt: string;
    authorEmail: string;
}

export enum RulesType{
    Bug = 'BUG',
    CodeSmell = 'CODE_SMELL',
    SecurityHotspot = 'SECURITY_HOTSPOT',
    Vulnerability = 'VULNERABILITY',
}

export enum RulesSeverity{
    Blocker = 'BLOCKER',
    Critical = 'CRITICAL',
    Info = 'INFO',
    Major = 'MAJOR',
    Minor = 'MINOR',
}