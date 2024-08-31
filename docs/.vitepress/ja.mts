import { type DefaultTheme, defineConfig } from 'vitepress';

export const ja = defineConfig({
  lang: 'ja',
  description: '高速なパフォーマンスと小さなバンドルサイズを持つ最先端のJavaScriptユーティリティライブラリ',

  themeConfig: {
    nav: nav(),

    sidebar: sidebar(),

    editLink: {
      pattern: 'https://github.com/toss/es-toolkit/edit/main/docs/:path',
      text: 'GitHubで編集する',
    },

    footer: {
      message: 'MIT ライセンスの下で配布されています。',
      copyright: `Copyright © ${new Date().getFullYear()} Viva Republica, Inc.`,
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'ホーム', link: '/ja' },
    { text: '導入', link: '/ja/intro' },
    { text: 'リファレンス', link: '/ja/reference/array/chunk' },
  ];
}

function sidebar(): DefaultTheme.Sidebar {
  return [
    {
      text: 'ガイド',
      items: [
        { text: '紹介', link: '/ja/intro' },
        { text: 'インストールと使用方法', link: '/ja/usage' },
        { text: 'バンドルサイズ', link: '/ja/bundle-size' },
        { text: 'パフォーマンス', link: '/ja/performance' },
        { text: 'Lodash との互換性', link: '/ja/compatibility' },
      ],
    },
    {
      text: 'リファレンス',
      items: [
        {
          text: '配列',
          items: [
            { text: 'at', link: '/ja/reference/array/at' },
            { text: 'chunk', link: '/ja/reference/array/chunk' },
            { text: 'concat (compat)', link: '/ja/reference/compat/array/concat' },
            { text: 'countBy', link: '/ja/reference/array/countBy' },
            { text: 'compact', link: '/ja/reference/array/compact' },
            { text: 'difference', link: '/ja/reference/array/difference' },
            { text: 'differenceBy', link: '/ja/reference/array/differenceBy' },
            { text: 'differenceWith', link: '/ja/reference/array/differenceWith' },
            { text: 'drop', link: '/ja/reference/array/drop' },
            { text: 'dropWhile', link: '/ja/reference/array/dropWhile' },
            { text: 'dropRight', link: '/ja/reference/array/dropRight' },
            { text: 'dropRightWhile', link: '/ja/reference/array/dropRightWhile' },
            { text: 'fill', link: '/ja/reference/array/fill' },
            { text: 'toFilled', link: '/ja/reference/array/toFilled' },
            { text: 'find (compat)', link: '/ja/reference/compat/array/find' },
            { text: 'findIndex (compat)', link: '/ja/reference/compat/array/findIndex' },
            { text: 'flatMap', link: '/ja/reference/array/flatMap' },
            { text: 'flatten', link: '/ja/reference/array/flatten' },
            { text: 'flattenDeep', link: '/ja/reference/array/flattenDeep' },
            { text: 'forEachRight', link: '/ja/reference/array/forEachRight' },
            { text: 'groupBy', link: '/ja/reference/array/groupBy' },
            { text: 'indexOf (compat)', link: '/ja/reference/compat/array/indexOf' },
            { text: 'intersection', link: '/ja/reference/array/intersection' },
            { text: 'intersectionBy', link: '/ja/reference/array/intersectionBy' },
            {
              text: 'intersectionWith',
              link: '/ja/reference/array/intersectionWith',
            },
            { text: 'isSubset', link: '/ja/reference/array/isSubset' },
            { text: 'keyBy', link: '/ja/reference/array/keyBy' },
            { text: 'minBy', link: '/ja/reference/array/minBy' },
            { text: 'maxBy', link: '/ja/reference/array/maxBy' },
            { text: 'min (compat)', link: '/ja/reference/compat/array/min' },
            { text: 'max (compat)', link: '/ja/reference/compat/array/max' },
            { text: 'orderBy', link: '/ja/reference/array/orderBy' },
            { text: 'partition', link: '/ja/reference/array/partition' },
            { text: 'pullAt', link: '/ja/reference/array/pullAt' },
            { text: 'sample', link: '/ja/reference/array/sample' },
            { text: 'sampleSize', link: '/ja/reference/array/sampleSize' },
            { text: 'shuffle', link: '/ja/reference/array/shuffle' },
            { text: 'size (compat)', link: '/ja/reference/compat/array/size' },
            { text: 'sortBy', link: '/ja/reference/array/sortBy' },
            { text: 'take', link: '/ja/reference/array/take' },
            { text: 'takeWhile', link: '/ja/reference/array/takeWhile' },
            { text: 'takeRight', link: '/ja/reference/array/takeRight' },
            { text: 'takeRightWhile', link: '/ja/reference/array/takeRightWhile' },
            { text: 'union', link: '/ja/reference/array/union' },
            { text: 'unionBy', link: '/ja/reference/array/unionBy' },
            { text: 'unionWith', link: '/ja/reference/array/unionWith' },
            { text: 'uniq', link: '/ja/reference/array/uniq' },
            { text: 'uniqBy', link: '/ja/reference/array/uniqBy' },
            { text: 'uniqWith', link: '/ja/reference/array/uniqWith' },
            { text: 'unzip', link: '/ja/reference/array/unzip' },
            { text: 'unzipWith', link: '/ja/reference/array/unzipWith' },
            { text: 'without', link: '/ja/reference/array/without' },
            { text: 'xor', link: '/ja/reference/array/xor' },
            { text: 'xorBy', link: '/ja/reference/array/xorBy' },
            { text: 'xorWith', link: '/ja/reference/array/xorWith' },
            { text: 'zip', link: '/ja/reference/array/zip' },
            { text: 'zipObject', link: '/ja/reference/array/zipObject' },
            { text: 'zipObjectDeep (compat)', link: '/ja/reference/compat/array/zipObjectDeep' },
            { text: 'zipWith', link: '/ja/reference/array/zipWith' },
            { text: 'head', link: '/ja/reference/array/head' },
            { text: 'tail', link: '/ja/reference/array/tail' },
            { text: 'last', link: '/ja/reference/array/last' },
            { text: 'initial', link: '/ja/reference/array/initial' },
          ],
        },
        {
          text: '関数',
          items: [
            { text: 'before', link: '/ja/reference/function/before' },
            { text: 'after', link: '/ja/reference/function/after' },
            { text: 'debounce', link: '/ja/reference/function/debounce' },
            { text: 'throttle', link: '/ja/reference/function/throttle' },
            { text: 'negate', link: '/ja/reference/function/negate' },
            { text: 'once', link: '/ja/reference/function/once' },
            { text: 'noop', link: '/ja/reference/function/noop' },
            { text: 'memoize', link: '/ja/reference/function/memoize' },
            { text: 'ary', link: '/ja/reference/function/ary' },
            { text: 'unary', link: '/ja/reference/function/unary' },
            { text: 'bind (compat)', link: '/ja/reference/compat/function/bind' },
            { text: 'partial', link: '/ja/reference/function/partial' },
            { text: 'partialRight', link: '/ja/reference/function/partialRight' },
            { text: 'rest', link: '/ja/reference/function/rest' },
          ],
        },
        {
          text: '数学',
          items: [
            { text: 'clamp', link: '/ja/reference/math/clamp' },
            { text: 'inRange', link: '/ja/reference/math/inRange' },
            { text: 'mean', link: '/ja/reference/math/mean' },
            { text: 'meanBy', link: '/ja/reference/math/meanBy' },
            { text: 'random', link: '/ja/reference/math/random' },
            { text: 'randomInt', link: '/ja/reference/math/randomInt' },
            { text: 'range', link: '/ja/reference/math/range' },
            { text: 'round', link: '/ja/reference/math/round' },
            { text: 'sum', link: '/ja/reference/math/sum' },
            { text: 'sumBy', link: '/ja/reference/math/sumBy' },
          ],
        },
        {
          text: 'オブジェクト',
          items: [
            { text: 'clone', link: '/ja/reference/object/clone' },
            { text: 'cloneDeep', link: '/ja/reference/object/cloneDeep' },
            { text: 'invert', link: '/ja/reference/object/invert' },
            { text: 'flattenObject', link: '/ja/reference/object/flattenObject' },
            { text: 'mapKeys', link: '/ja/reference/object/mapKeys' },
            { text: 'mapValues', link: '/ja/reference/object/mapValues' },
            { text: 'merge', link: '/ja/reference/object/merge' },
            { text: 'mergeWith', link: '/ja/reference/object/mergeWith' },
            { text: 'toMerged', link: '/ja/reference/object/toMerged' },
            { text: 'omit', link: '/ja/reference/object/omit' },
            { text: 'omitBy', link: '/ja/reference/object/omitBy' },
            { text: 'pick', link: '/ja/reference/object/pick' },
            { text: 'pickBy', link: '/ja/reference/object/pickBy' },
            { text: 'get (compat)', link: '/ja/reference/compat/object/get' },
            { text: 'set (compat)', link: '/ja/reference/compat/object/set' },
            { text: 'has (compat)', link: '/ja/reference/compat/object/has' },
            { text: 'property (compat)', link: '/ja/reference/compat/object/property' },
          ],
        },
        {
          text: '述語',
          items: [
            { text: 'isArguments (compat)', link: '/ja/reference/compat/predicate/isArguments' },
            { text: 'isArray (compat)', link: '/ja/reference/compat/predicate/isArray' },
            { text: 'isArrayLike (compat)', link: '/ja/reference/compat/predicate/isArrayLike' },
            { text: 'isBoolean', link: '/ja/reference/predicate/isBoolean' },
            { text: 'isEqual', link: '/ja/reference/predicate/isEqual' },
            { text: 'isFunction', link: '/ja/reference/predicate/isFunction' },
            { text: 'isLength', link: '/ja/reference/predicate/isLength' },
            { text: 'isPlainObject', link: '/ja/reference/predicate/isPlainObject' },
            { text: 'isPrimitive', link: '/ja/reference/predicate/isPrimitive' },
            { text: 'isString', link: '/ja/reference/predicate/isString' },
            { text: 'isSymbol', link: '/ja/reference/predicate/isSymbol' },
            { text: 'isMatch (compat)', link: '/ja/reference/compat/predicate/isMatch' },
            { text: 'matches (compat)', link: '/ja/reference/compat/predicate/matches' },
            { text: 'matchesProperty (compat)', link: '/ja/reference/compat/predicate/matchesProperty' },
            { text: 'isNil', link: '/ja/reference/predicate/isNil' },
            { text: 'isNotNil', link: '/ja/reference/predicate/isNotNil' },
            { text: 'isNull', link: '/ja/reference/predicate/isNull' },
            { text: 'isObjectLike (compat)', link: '/ja/reference/compat/predicate/isObjectLike' },
            { text: 'isTypedArray', link: '/ja/reference/predicate/isTypedArray' },
            { text: 'isUndefined', link: '/ja/reference/predicate/isUndefined' },
          ],
        },
        {
          text: 'Promise',
          items: [
            { text: 'delay', link: '/ja/reference/promise/delay' },
            { text: 'timeout', link: '/ja/reference/promise/timeout' },
            { text: 'withTimeout', link: '/ja/reference/promise/withTimeout' },
          ],
        },
        {
          text: '文字列',
          items: [
            { text: 'camelCase', link: '/ja/reference/string/camelCase' },
            { text: 'snakeCase', link: '/ja/reference/string/snakeCase' },
            { text: 'kebabCase', link: '/ja/reference/string/kebabCase' },
            { text: 'lowerCase', link: '/ja/reference/string/lowerCase' },
            { text: 'startCase', link: '/ja/reference/string/startCase' },
            { text: 'pascalCase', link: '/ja/reference/string/pascalCase' },
            { text: 'capitalize', link: '/ja/reference/string/capitalize' },
            { text: 'startsWith (compat)', link: '/ja/reference/compat/string/startsWith' },
            { text: 'endsWith (compat)', link: '/ja/reference/compat/string/endsWith' },
            { text: 'padStart (compat)', link: '/ja/reference/compat/string/padStart' },
            { text: 'padEnd (compat)', link: '/ja/reference/compat/string/padEnd' },
            { text: 'deburr', link: '/ja/reference/string/deburr' },
          ],
        },
        {
          text: 'エラー',
          items: [
            { text: 'AbortError', link: '/ja/reference/error/AbortError' },
            { text: 'TimeoutError', link: '/ja/reference/error/TimeoutError' },
          ],
        },
      ],
    },
  ];
}

export const search: DefaultTheme.LocalSearchOptions['locales'] = {
  ja: {
    translations: {
      button: {
        buttonText: '検索',
        buttonAriaLabel: '検索',
      },
      modal: {
        backButtonTitle: '戻る',
        displayDetails: '詳細を表示',
        footer: {
          closeKeyAriaLabel: '閉じる',
          closeText: '閉じる',
          navigateDownKeyAriaLabel: '下へ',
          navigateText: '移動',
          navigateUpKeyAriaLabel: '上へ',
          selectKeyAriaLabel: '選択',
          selectText: '選択',
        },
        noResultsText: '検索結果が見つかりませんでした。',
        resetButtonTitle: 'すべてクリア',
      },
    },
  },
};