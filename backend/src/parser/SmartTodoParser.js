// Generated from src/parser/SmartTodo.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import SmartTodoListener from './SmartTodoListener.js';
import SmartTodoVisitor from './SmartTodoVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\b\'\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0003\u0002\u0006\u0002\u0010\n\u0002\r\u0002\u000e\u0002\u0011\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005",
    "\u0003\u001a\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0002\u0002\b\u0002\u0004\u0006\b\n\f\u0002",
    "\u0002\u0002$\u0002\u000f\u0003\u0002\u0002\u0002\u0004\u0019\u0003",
    "\u0002\u0002\u0002\u0006\u001b\u0003\u0002\u0002\u0002\b\u001e\u0003",
    "\u0002\u0002\u0002\n!\u0003\u0002\u0002\u0002\f$\u0003\u0002\u0002\u0002",
    "\u000e\u0010\u0005\u0004\u0003\u0002\u000f\u000e\u0003\u0002\u0002\u0002",
    "\u0010\u0011\u0003\u0002\u0002\u0002\u0011\u000f\u0003\u0002\u0002\u0002",
    "\u0011\u0012\u0003\u0002\u0002\u0002\u0012\u0013\u0003\u0002\u0002\u0002",
    "\u0013\u0014\u0007\u0002\u0002\u0003\u0014\u0003\u0003\u0002\u0002\u0002",
    "\u0015\u001a\u0005\u0006\u0004\u0002\u0016\u001a\u0005\b\u0005\u0002",
    "\u0017\u001a\u0005\n\u0006\u0002\u0018\u001a\u0005\f\u0007\u0002\u0019",
    "\u0015\u0003\u0002\u0002\u0002\u0019\u0016\u0003\u0002\u0002\u0002\u0019",
    "\u0017\u0003\u0002\u0002\u0002\u0019\u0018\u0003\u0002\u0002\u0002\u001a",
    "\u0005\u0003\u0002\u0002\u0002\u001b\u001c\u0007\u0003\u0002\u0002\u001c",
    "\u001d\u0007\u0007\u0002\u0002\u001d\u0007\u0003\u0002\u0002\u0002\u001e",
    "\u001f\u0007\u0004\u0002\u0002\u001f \u0007\u0006\u0002\u0002 \t\u0003",
    "\u0002\u0002\u0002!\"\u0007\u0005\u0002\u0002\"#\u0007\u0007\u0002\u0002",
    "#\u000b\u0003\u0002\u0002\u0002$%\u0007\u0007\u0002\u0002%\r\u0003\u0002",
    "\u0002\u0002\u0004\u0011\u0019"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class SmartTodoParser extends antlr4.Parser {

    static grammarFileName = "SmartTodo.g4";
    static literalNames = [ null, "'#'", "'!'", "'due:'" ];
    static symbolicNames = [ null, "TAG_PREFIX", "PRIORITY_PREFIX", "DUE_PREFIX", 
                             "NUMBER", "WORD", "WS" ];
    static ruleNames = [ "startRule", "part", "tag", "priority", "dueDate", 
                         "text" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SmartTodoParser.ruleNames;
        this.literalNames = SmartTodoParser.literalNames;
        this.symbolicNames = SmartTodoParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	startRule() {
	    let localctx = new StartRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SmartTodoParser.RULE_startRule);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 13; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 12;
	            this.part();
	            this.state = 15; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SmartTodoParser.TAG_PREFIX) | (1 << SmartTodoParser.PRIORITY_PREFIX) | (1 << SmartTodoParser.DUE_PREFIX) | (1 << SmartTodoParser.WORD))) !== 0));
	        this.state = 17;
	        this.match(SmartTodoParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	part() {
	    let localctx = new PartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SmartTodoParser.RULE_part);
	    try {
	        this.state = 23;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SmartTodoParser.TAG_PREFIX:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 19;
	            this.tag();
	            break;
	        case SmartTodoParser.PRIORITY_PREFIX:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 20;
	            this.priority();
	            break;
	        case SmartTodoParser.DUE_PREFIX:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 21;
	            this.dueDate();
	            break;
	        case SmartTodoParser.WORD:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 22;
	            this.text();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tag() {
	    let localctx = new TagContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SmartTodoParser.RULE_tag);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.match(SmartTodoParser.TAG_PREFIX);
	        this.state = 26;
	        this.match(SmartTodoParser.WORD);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	priority() {
	    let localctx = new PriorityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SmartTodoParser.RULE_priority);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.match(SmartTodoParser.PRIORITY_PREFIX);
	        this.state = 29;
	        this.match(SmartTodoParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dueDate() {
	    let localctx = new DueDateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SmartTodoParser.RULE_dueDate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.match(SmartTodoParser.DUE_PREFIX);
	        this.state = 32;
	        this.match(SmartTodoParser.WORD);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	text() {
	    let localctx = new TextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SmartTodoParser.RULE_text);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.match(SmartTodoParser.WORD);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

SmartTodoParser.EOF = antlr4.Token.EOF;
SmartTodoParser.TAG_PREFIX = 1;
SmartTodoParser.PRIORITY_PREFIX = 2;
SmartTodoParser.DUE_PREFIX = 3;
SmartTodoParser.NUMBER = 4;
SmartTodoParser.WORD = 5;
SmartTodoParser.WS = 6;

SmartTodoParser.RULE_startRule = 0;
SmartTodoParser.RULE_part = 1;
SmartTodoParser.RULE_tag = 2;
SmartTodoParser.RULE_priority = 3;
SmartTodoParser.RULE_dueDate = 4;
SmartTodoParser.RULE_text = 5;

class StartRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmartTodoParser.RULE_startRule;
    }

	EOF() {
	    return this.getToken(SmartTodoParser.EOF, 0);
	};

	part = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PartContext);
	    } else {
	        return this.getTypedRuleContext(PartContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SmartTodoListener ) {
	        listener.enterStartRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmartTodoListener ) {
	        listener.exitStartRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SmartTodoVisitor ) {
	        return visitor.visitStartRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmartTodoParser.RULE_part;
    }

	tag() {
	    return this.getTypedRuleContext(TagContext,0);
	};

	priority() {
	    return this.getTypedRuleContext(PriorityContext,0);
	};

	dueDate() {
	    return this.getTypedRuleContext(DueDateContext,0);
	};

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SmartTodoListener ) {
	        listener.enterPart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmartTodoListener ) {
	        listener.exitPart(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SmartTodoVisitor ) {
	        return visitor.visitPart(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TagContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmartTodoParser.RULE_tag;
    }

	TAG_PREFIX() {
	    return this.getToken(SmartTodoParser.TAG_PREFIX, 0);
	};

	WORD() {
	    return this.getToken(SmartTodoParser.WORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SmartTodoListener ) {
	        listener.enterTag(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmartTodoListener ) {
	        listener.exitTag(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SmartTodoVisitor ) {
	        return visitor.visitTag(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PriorityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmartTodoParser.RULE_priority;
    }

	PRIORITY_PREFIX() {
	    return this.getToken(SmartTodoParser.PRIORITY_PREFIX, 0);
	};

	NUMBER() {
	    return this.getToken(SmartTodoParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SmartTodoListener ) {
	        listener.enterPriority(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmartTodoListener ) {
	        listener.exitPriority(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SmartTodoVisitor ) {
	        return visitor.visitPriority(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DueDateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmartTodoParser.RULE_dueDate;
    }

	DUE_PREFIX() {
	    return this.getToken(SmartTodoParser.DUE_PREFIX, 0);
	};

	WORD() {
	    return this.getToken(SmartTodoParser.WORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SmartTodoListener ) {
	        listener.enterDueDate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmartTodoListener ) {
	        listener.exitDueDate(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SmartTodoVisitor ) {
	        return visitor.visitDueDate(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SmartTodoParser.RULE_text;
    }

	WORD() {
	    return this.getToken(SmartTodoParser.WORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SmartTodoListener ) {
	        listener.enterText(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SmartTodoListener ) {
	        listener.exitText(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SmartTodoVisitor ) {
	        return visitor.visitText(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




SmartTodoParser.StartRuleContext = StartRuleContext; 
SmartTodoParser.PartContext = PartContext; 
SmartTodoParser.TagContext = TagContext; 
SmartTodoParser.PriorityContext = PriorityContext; 
SmartTodoParser.DueDateContext = DueDateContext; 
SmartTodoParser.TextContext = TextContext; 
