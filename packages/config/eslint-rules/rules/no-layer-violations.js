module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Enforce Clean Architecture layer dependencies',
      category: 'Architecture',
      recommended: true,
    },
    messages: {
      layerViolation:
        'Layer violation: {{from}} cannot import from {{to}}. Check Clean Architecture dependency rules.',
    },
    schema: [],
  },
  create(context) {
    const filename = context.getFilename();

    function getLayer(path) {
      if (path.includes('/domain/')) return 'domain';
      if (path.includes('/application/')) return 'application';
      if (path.includes('/infrastructure/')) return 'infrastructure';
      if (path.includes('/presentation/')) return 'presentation';
      return null;
    }

    function isViolation(currentLayer, importPath) {
      const importLayer = getLayer(importPath);
      if (!currentLayer || !importLayer) return false;

      const violations = {
        domain: ['application', 'infrastructure', 'presentation'],
        application: ['infrastructure', 'presentation'],
        infrastructure: ['presentation'],
      };

      return violations[currentLayer]?.includes(importLayer) || false;
    }

    return {
      ImportDeclaration(node) {
        const currentLayer = getLayer(filename);
        const importPath = node.source.value;

        if (isViolation(currentLayer, importPath)) {
          context.report({
            node,
            messageId: 'layerViolation',
            data: {
              from: currentLayer,
              to: getLayer(importPath),
            },
          });
        }
      },
    };
  },
};
