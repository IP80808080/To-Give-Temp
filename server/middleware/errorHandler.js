const _0x4152b5 = _0x34a3,
  _0x1e069c = _0x34a3;
function _0x34a3(_0x363636, _0x28112e) {
  const _0x11e753 = _0x5e8c();
  return (
    (_0x34a3 = function (_0x1e6b99, _0x5b33e5) {
      _0x1e6b99 = _0x1e6b99 - (0x2 * -0x46a + 0xa12 + -0x46);
      let _0x15d0c9 = _0x11e753[_0x1e6b99];
      return _0x15d0c9;
    }),
    _0x34a3(_0x363636, _0x28112e)
  );
}
(function (_0x498c59, _0x5ced75) {
  const _0xe706fe = _0x34a3,
    _0x1ce0a6 = _0x34a3,
    _0x429e86 = _0x498c59();
  while (!![]) {
    try {
      const _0x191416 =
        -parseInt(_0xe706fe(0x111)) / (0x163a + -0x1 * 0x116c + -0x4cd) +
        (-parseInt(_0x1ce0a6(0x10e)) /
          (-0x2494 * -0x1 + -0x3d5 + 0x1ed * -0x11)) *
          (parseInt(_0xe706fe(0x119)) / (-0xa24 * 0x2 + 0x45d * 0x8 + -0xe9d)) +
        (parseInt(_0xe706fe(0x105)) / (-0x2377 + -0x39c * 0x9 + 0x1 * 0x43f7)) *
          (parseInt(_0x1ce0a6(0xfd)) / (0x1af1 + 0x3 * 0x63 + -0x1c15)) +
        -parseInt(_0x1ce0a6(0x103)) / (-0x123a + 0x2ba * -0x1 + -0x37f * -0x6) +
        (-parseInt(_0x1ce0a6(0xfc)) /
          (0x67 * 0x44 + -0xa84 * -0x2 + 0x101f * -0x3)) *
          (parseInt(_0x1ce0a6(0x115)) /
            (-0xbb * 0x20 + 0x6 * 0x6 + 0x2 * 0xba2)) +
        (-parseInt(_0x1ce0a6(0x10c)) / (0x328 + 0x1 * 0xa39 + -0x1e8 * 0x7)) *
          (-parseInt(_0xe706fe(0xfe)) / (-0x79 * 0xe + -0x23fd + 0x2aa5)) +
        (-parseInt(_0x1ce0a6(0x120)) / (0x2644 + 0x10a + -0x2743)) *
          (-parseInt(_0xe706fe(0x10d)) /
            (0x3 * -0xc7a + 0xf * -0x111 + 0x1 * 0x3579));
      if (_0x191416 === _0x5ced75) break;
      else _0x429e86["push"](_0x429e86["shift"]());
    } catch (_0x45ecfe) {
      _0x429e86["push"](_0x429e86["shift"]());
    }
  }
})(_0x5e8c, 0x4f7ae + 0x1 * 0x1e00b + -0x42013);
const ErrorResponse = require(_0x4152b5(0x113)),
  { logEvents } = require("./logger"),
  errorHandlerd = (_0x3b1c9, _0x56ee32, _0x4b4981, _0xde496a) => {
    const _0x39a989 = _0x4152b5,
      _0x255ad1 = _0x4152b5,
      _0x132e25 = {};
    (_0x132e25[_0x39a989(0x108)] = function (_0x5ba8d7, _0x24914f) {
      return _0x5ba8d7 === _0x24914f;
    }),
      (_0x132e25[_0x39a989(0xff)] = _0x39a989(0xf9)),
      (_0x132e25[_0x255ad1(0x101)] = "Duplicate\x20field\x20value\x20entered"),
      (_0x132e25[_0x39a989(0x10a)] = function (_0x4a2108, _0x277f81) {
        return _0x4a2108 === _0x277f81;
      });
    const _0x4c5940 = _0x132e25,
      _0x274042 = { ..._0x3b1c9 };
    let _0x42257c = _0x274042;
    _0x42257c[_0x39a989(0x102)] = _0x3b1c9[_0x255ad1(0x102)];
    if (
      _0x4c5940[_0x39a989(0x108)](
        _0x3b1c9[_0x39a989(0x110)],
        _0x4c5940[_0x255ad1(0xff)]
      )
    ) {
      const _0x3b3034 =
        "Ressource\x20not\x20found\x20" + _0x3b1c9[_0x39a989(0x11e)];
      _0x42257c = new ErrorResponse(
        _0x3b3034,
        -0x3 * 0xa93 + 0xee5 + 0x98 * 0x1f
      );
    }
    if (
      _0x4c5940[_0x255ad1(0x108)](
        _0x3b1c9[_0x255ad1(0x112)],
        0xf * 0x35f + 0x59 * 0xd3 + 0x287a * -0x2
      )
    ) {
      const _0x1c144d = _0x4c5940[_0x255ad1(0x101)];
      _0x42257c = new ErrorResponse(
        _0x1c144d,
        -0x7 * -0x17b + -0x2547 * -0x1 + 0x4 * -0xb85
      );
    }
    if (
      _0x4c5940[_0x255ad1(0x10a)](_0x3b1c9[_0x255ad1(0x110)], _0x255ad1(0x10b))
    ) {
      const _0x168fb4 = Object[_0x39a989(0x11c)](_0x3b1c9[_0x255ad1(0xfa)])[
        _0x255ad1(0x11b)
      ]((_0xc18ded) => "\x20" + _0xc18ded["message"]);
      _0x42257c = new ErrorResponse(_0x168fb4, 0x182c + 0x2648 + 0x1e72 * -0x2);
    }
    _0x4b4981["status"](
      _0x42257c[_0x255ad1(0x118)] || 0x15 * 0x107 + 0x1aa8 + -0x2e47
    )[_0x39a989(0x116)]({
      success: ![],
      error: _0x42257c["message"] || _0x255ad1(0xfb),
    });
  },
  errorHandlera = (_0x296f72, _0x3039b1, _0x1c7e4f, _0x372591) => {
    const _0x47e8b1 = _0x4152b5,
      _0x4ae758 = _0x4152b5,
      _0x3665b5 = {
        IcJsN: function (_0x4fe40b, _0xb1f35d, _0xe114e4) {
          return _0x4fe40b(_0xb1f35d, _0xe114e4);
        },
        HOfnT: _0x47e8b1(0x11d),
      };
    _0x3665b5[_0x47e8b1(0x104)](
      logEvents,
      _0x296f72[_0x47e8b1(0x110)] +
        ":\x20" +
        _0x296f72[_0x4ae758(0x102)] +
        "\x09" +
        _0x3039b1[_0x4ae758(0x106)] +
        "\x09" +
        _0x3039b1[_0x4ae758(0x121)] +
        "\x09" +
        _0x3039b1["headers"][_0x4ae758(0x107)],
      _0x3665b5[_0x47e8b1(0x100)]
    ),
      console[_0x47e8b1(0x10f)](_0x296f72[_0x47e8b1(0xf8)]);
    const _0x32a324 = _0x1c7e4f[_0x47e8b1(0x109)]
      ? _0x1c7e4f[_0x4ae758(0x109)]
      : 0x246c + -0xf7f + -0x12f9;
    _0x1c7e4f[_0x4ae758(0x11f)](_0x32a324);
    const _0x23828f = {};
    (_0x23828f["message"] = _0x296f72[_0x47e8b1(0x102)]),
      _0x1c7e4f[_0x4ae758(0x116)](_0x23828f);
  },
  _0xdcd34b = {};
(_0xdcd34b[_0x4152b5(0x117)] = errorHandlerd),
  (_0xdcd34b[_0x1e069c(0x11a)] = errorHandlera),
  (module[_0x4152b5(0x114)] = _0xdcd34b);
function _0x5e8c() {
  const _0x1f62c3 = [
    "52vfIZfi",
    "method",
    "origin",
    "eEAvV",
    "statusCode",
    "wJchX",
    "ValidationError",
    "9zhMsDa",
    "892272ySGLQJ",
    "2tzKXiv",
    "log",
    "name",
    "81780ltsOEQ",
    "code",
    "../utils/errorResponse",
    "exports",
    "16248XMlFhJ",
    "json",
    "errorHandlerd",
    "codeStatus",
    "516471aoCYmU",
    "errorHandlera",
    "map",
    "values",
    "errLog.log",
    "value",
    "status",
    "44Jdmfcp",
    "url",
    "stack",
    "CastError",
    "errors",
    "server\x20error",
    "693HLIckQ",
    "15850cehKwQ",
    "3150110mSHMCP",
    "oNmwW",
    "HOfnT",
    "ocutR",
    "message",
    "123318lQNURS",
    "IcJsN",
  ];
  _0x5e8c = function () {
    return _0x1f62c3;
  };
  return _0x5e8c();
}
