// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: warden/intent/action.proto

package types

import (
	fmt "fmt"
	types "github.com/cosmos/cosmos-sdk/codec/types"
	proto "github.com/cosmos/gogoproto/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

// Current status of an action.
type ActionStatus int32

const (
	// Unspecified status.
	ActionStatus_ACTION_STATUS_UNSPECIFIED ActionStatus = 0
	// Action is pending approval. This is the initial status.
	ActionStatus_ACTION_STATUS_PENDING ActionStatus = 1
	// Intent has been satified, action has been executed.
	ActionStatus_ACTION_STATUS_COMPLETED ActionStatus = 2
	// Action has been revoked by its creator.
	ActionStatus_ACTION_STATUS_REVOKED ActionStatus = 3
	// Action has been rejected since Btl is expired
	ActionStatus_ACTION_STATUS_TIMEOUT ActionStatus = 4
)

var ActionStatus_name = map[int32]string{
	0: "ACTION_STATUS_UNSPECIFIED",
	1: "ACTION_STATUS_PENDING",
	2: "ACTION_STATUS_COMPLETED",
	3: "ACTION_STATUS_REVOKED",
	4: "ACTION_STATUS_TIMEOUT",
}

var ActionStatus_value = map[string]int32{
	"ACTION_STATUS_UNSPECIFIED": 0,
	"ACTION_STATUS_PENDING":     1,
	"ACTION_STATUS_COMPLETED":   2,
	"ACTION_STATUS_REVOKED":     3,
	"ACTION_STATUS_TIMEOUT":     4,
}

func (x ActionStatus) String() string {
	return proto.EnumName(ActionStatus_name, int32(x))
}

func (ActionStatus) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_e86b754e81df60ca, []int{0}
}

// Action wraps a message that needs to be approved by a set of approvers.
type Action struct {
	Id        uint64       `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Approvers []string     `protobuf:"bytes,2,rep,name=approvers,proto3" json:"approvers,omitempty"`
	Status    ActionStatus `protobuf:"varint,3,opt,name=status,proto3,enum=warden.intent.ActionStatus" json:"status,omitempty"`
	// Optional intent id that must be satisfied by the approvers.
	// If not specified, it's up to the creator of the action to decide what to
	// apply.
	IntentId uint64 `protobuf:"varint,4,opt,name=intent_id,json=intentId,proto3" json:"intent_id,omitempty"`
	// Original message that started the action, it will be executed when the
	// intent is satisfied.
	Msg     *types.Any `protobuf:"bytes,5,opt,name=msg,proto3" json:"msg,omitempty"`
	Creator string     `protobuf:"bytes,6,opt,name=creator,proto3" json:"creator,omitempty"`
	// BTL (blocks to live) is the block height up until this action can be
	// approved or rejected.
	Btl uint64 `protobuf:"varint,7,opt,name=btl,proto3" json:"btl,omitempty"`
}

func (m *Action) Reset()         { *m = Action{} }
func (m *Action) String() string { return proto.CompactTextString(m) }
func (*Action) ProtoMessage()    {}
func (*Action) Descriptor() ([]byte, []int) {
	return fileDescriptor_e86b754e81df60ca, []int{0}
}
func (m *Action) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Action) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Action.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Action) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Action.Merge(m, src)
}
func (m *Action) XXX_Size() int {
	return m.Size()
}
func (m *Action) XXX_DiscardUnknown() {
	xxx_messageInfo_Action.DiscardUnknown(m)
}

var xxx_messageInfo_Action proto.InternalMessageInfo

func (m *Action) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *Action) GetApprovers() []string {
	if m != nil {
		return m.Approvers
	}
	return nil
}

func (m *Action) GetStatus() ActionStatus {
	if m != nil {
		return m.Status
	}
	return ActionStatus_ACTION_STATUS_UNSPECIFIED
}

func (m *Action) GetIntentId() uint64 {
	if m != nil {
		return m.IntentId
	}
	return 0
}

func (m *Action) GetMsg() *types.Any {
	if m != nil {
		return m.Msg
	}
	return nil
}

func (m *Action) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *Action) GetBtl() uint64 {
	if m != nil {
		return m.Btl
	}
	return 0
}

func init() {
	proto.RegisterEnum("warden.intent.ActionStatus", ActionStatus_name, ActionStatus_value)
	proto.RegisterType((*Action)(nil), "warden.intent.Action")
}

func init() { proto.RegisterFile("warden/intent/action.proto", fileDescriptor_e86b754e81df60ca) }

var fileDescriptor_e86b754e81df60ca = []byte{
	// 388 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x64, 0x92, 0xcf, 0xaa, 0xd3, 0x40,
	0x14, 0xc6, 0x33, 0x49, 0xcd, 0x35, 0xa3, 0x5e, 0xc2, 0xa0, 0x38, 0xbd, 0xd5, 0x10, 0x5c, 0x48,
	0x10, 0x9c, 0xc0, 0xbd, 0x0f, 0x20, 0xb1, 0x19, 0x25, 0x68, 0x93, 0x92, 0xa4, 0x82, 0x6e, 0x4a,
	0xfe, 0x19, 0x03, 0x6d, 0x26, 0x24, 0x53, 0xb5, 0x6f, 0xe1, 0xde, 0x17, 0x72, 0xd9, 0xa5, 0x0b,
	0x17, 0xd2, 0xbe, 0x88, 0x34, 0xd3, 0xa2, 0xb5, 0xbb, 0xf9, 0xce, 0xef, 0x3b, 0xe7, 0x7c, 0x1c,
	0x06, 0x5e, 0x7d, 0x49, 0xda, 0xbc, 0xa8, 0xed, 0xaa, 0xe6, 0x45, 0xcd, 0xed, 0x24, 0xe3, 0x15,
	0xab, 0x49, 0xd3, 0x32, 0xce, 0xd0, 0x3d, 0xc1, 0x88, 0x60, 0x57, 0xc3, 0x92, 0xb1, 0x72, 0x51,
	0xd8, 0x3d, 0x4c, 0x57, 0x1f, 0xed, 0xa4, 0x5e, 0x0b, 0xe7, 0x93, 0x5f, 0x00, 0xaa, 0x4e, 0xdf,
	0x8a, 0x2e, 0xa1, 0x5c, 0xe5, 0x18, 0x98, 0xc0, 0x1a, 0x84, 0x72, 0x95, 0xa3, 0x47, 0x50, 0x4b,
	0x9a, 0xa6, 0x65, 0x9f, 0x8b, 0xb6, 0xc3, 0xb2, 0xa9, 0x58, 0x5a, 0xf8, 0xb7, 0x80, 0x6e, 0xa0,
	0xda, 0xf1, 0x84, 0xaf, 0x3a, 0xac, 0x98, 0xc0, 0xba, 0xbc, 0x1e, 0x91, 0x93, 0x9d, 0x44, 0x0c,
	0x8d, 0x7a, 0x4b, 0x78, 0xb0, 0xa2, 0x11, 0xd4, 0x04, 0x9e, 0x57, 0x39, 0x1e, 0xf4, 0x9b, 0x6e,
	0x8b, 0x82, 0x97, 0xa3, 0xa7, 0x50, 0x59, 0x76, 0x25, 0xbe, 0x65, 0x02, 0xeb, 0xce, 0xf5, 0x7d,
	0x22, 0x32, 0x93, 0x63, 0x66, 0xe2, 0xd4, 0xeb, 0x70, 0x6f, 0x40, 0x18, 0x5e, 0x64, 0x6d, 0x91,
	0x70, 0xd6, 0x62, 0xd5, 0x04, 0x96, 0x16, 0x1e, 0x25, 0xd2, 0xa1, 0x92, 0xf2, 0x05, 0xbe, 0xe8,
	0x07, 0xef, 0x9f, 0xcf, 0xbe, 0x03, 0x78, 0xf7, 0xdf, 0x24, 0xe8, 0x31, 0x1c, 0x3a, 0xe3, 0xd8,
	0x0b, 0xfc, 0x79, 0x14, 0x3b, 0xf1, 0x2c, 0x9a, 0xcf, 0xfc, 0x68, 0x4a, 0xc7, 0xde, 0x2b, 0x8f,
	0xba, 0xba, 0x84, 0x86, 0xf0, 0xc1, 0x29, 0x9e, 0x52, 0xdf, 0xf5, 0xfc, 0xd7, 0x3a, 0x40, 0x23,
	0xf8, 0xf0, 0x14, 0x8d, 0x83, 0xc9, 0xf4, 0x2d, 0x8d, 0xa9, 0xab, 0xcb, 0xe7, 0x7d, 0x21, 0x7d,
	0x17, 0xbc, 0xa1, 0xae, 0xae, 0x9c, 0xa3, 0xd8, 0x9b, 0xd0, 0x60, 0x16, 0xeb, 0x83, 0x97, 0xef,
	0x7f, 0x6c, 0x0d, 0xb0, 0xd9, 0x1a, 0xe0, 0xf7, 0xd6, 0x00, 0xdf, 0x76, 0x86, 0xb4, 0xd9, 0x19,
	0xd2, 0xcf, 0x9d, 0x21, 0x7d, 0x78, 0x51, 0x56, 0xfc, 0xd3, 0x2a, 0x25, 0x19, 0x5b, 0xda, 0xe2,
	0xae, 0xcf, 0xfb, 0x43, 0x64, 0x6c, 0x71, 0xd0, 0xff, 0x49, 0xfb, 0xeb, 0xf1, 0x23, 0xf0, 0x75,
	0x53, 0x74, 0xa9, 0xda, 0xf3, 0x9b, 0x3f, 0x01, 0x00, 0x00, 0xff, 0xff, 0xf5, 0x95, 0xb7, 0xe0,
	0x26, 0x02, 0x00, 0x00,
}

func (m *Action) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Action) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Action) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Btl != 0 {
		i = encodeVarintAction(dAtA, i, uint64(m.Btl))
		i--
		dAtA[i] = 0x38
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintAction(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0x32
	}
	if m.Msg != nil {
		{
			size, err := m.Msg.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintAction(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x2a
	}
	if m.IntentId != 0 {
		i = encodeVarintAction(dAtA, i, uint64(m.IntentId))
		i--
		dAtA[i] = 0x20
	}
	if m.Status != 0 {
		i = encodeVarintAction(dAtA, i, uint64(m.Status))
		i--
		dAtA[i] = 0x18
	}
	if len(m.Approvers) > 0 {
		for iNdEx := len(m.Approvers) - 1; iNdEx >= 0; iNdEx-- {
			i -= len(m.Approvers[iNdEx])
			copy(dAtA[i:], m.Approvers[iNdEx])
			i = encodeVarintAction(dAtA, i, uint64(len(m.Approvers[iNdEx])))
			i--
			dAtA[i] = 0x12
		}
	}
	if m.Id != 0 {
		i = encodeVarintAction(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintAction(dAtA []byte, offset int, v uint64) int {
	offset -= sovAction(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Action) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Id != 0 {
		n += 1 + sovAction(uint64(m.Id))
	}
	if len(m.Approvers) > 0 {
		for _, s := range m.Approvers {
			l = len(s)
			n += 1 + l + sovAction(uint64(l))
		}
	}
	if m.Status != 0 {
		n += 1 + sovAction(uint64(m.Status))
	}
	if m.IntentId != 0 {
		n += 1 + sovAction(uint64(m.IntentId))
	}
	if m.Msg != nil {
		l = m.Msg.Size()
		n += 1 + l + sovAction(uint64(l))
	}
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovAction(uint64(l))
	}
	if m.Btl != 0 {
		n += 1 + sovAction(uint64(m.Btl))
	}
	return n
}

func sovAction(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozAction(x uint64) (n int) {
	return sovAction(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Action) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowAction
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Action: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Action: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAction
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Id |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Approvers", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAction
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthAction
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthAction
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Approvers = append(m.Approvers, string(dAtA[iNdEx:postIndex]))
			iNdEx = postIndex
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Status", wireType)
			}
			m.Status = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAction
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Status |= ActionStatus(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field IntentId", wireType)
			}
			m.IntentId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAction
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.IntentId |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Msg", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAction
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthAction
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthAction
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Msg == nil {
				m.Msg = &types.Any{}
			}
			if err := m.Msg.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAction
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthAction
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthAction
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 7:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Btl", wireType)
			}
			m.Btl = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAction
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Btl |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipAction(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthAction
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipAction(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowAction
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowAction
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowAction
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthAction
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupAction
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthAction
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthAction        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowAction          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupAction = fmt.Errorf("proto: unexpected end of group")
)