import * as ts from 'typescript';
declare const process: {env: {NODE_ENV?: string}};
export default function(program: ts.Program, pluginOptions: {productionEnv: string}) {
    return (ctx: ts.TransformationContext) => {
        return (sourceFile: ts.SourceFile) => {
            if (process.env.NODE_ENV !== (pluginOptions.productionEnv || 'production')) return sourceFile;
            const checker = program.getTypeChecker();
            function visitor(node: ts.Node): ts.Node | undefined {
                if (isDebugImport(node)) {
                    return;
                }
                if (
                    ts.isExpressionStatement(node) &&
                    ts.isCallExpression(node.expression) &&
                    ts.isIdentifier(node.expression.expression) &&
                    isDebugSymbol(checker.getSymbolAtLocation(node.expression.expression))
                ) {
                    return;
                }

                if (
                    ts.isCallExpression(node) &&
                    ts.isIdentifier(node.expression) &&
                    isDebugSymbol(checker.getSymbolAtLocation(node.expression))
                ) {
                    if (isDebugSymbol(checker.getSymbolAtLocation(node.expression))) {
                        if (node.arguments.length > 0) {
                            return node.arguments[0];
                        } else {
                            return ts.createVoidZero();
                        }
                    }
                }
                return ts.visitEachChild(node, visitor, ctx);
            }
            return ts.visitEachChild(sourceFile, visitor, ctx);
        };
    };
}

function isDebugSymbol(symbol: ts.Symbol | undefined) {
    if (symbol !== undefined && isDebugFilename(symbol.declarations[0].getSourceFile().fileName)) {
        return true;
    }
    return (
        symbol !== undefined &&
        ts.isImportSpecifier(symbol.declarations[0]) &&
        isDebugImport(symbol.declarations[0].parent.parent.parent)
    );
}

function isDebugFilename(filename: string) {
    return Boolean(filename.match(/(^|\W)debug(\.[jt]sx?)?$/));
}

function isDebugImport(node: ts.Node) {
    return (
        ts.isImportDeclaration(node) &&
        ts.isStringLiteral(node.moduleSpecifier) &&
        isDebugFilename(node.moduleSpecifier.text)
    );
}
